import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import marked from "marked";

import {
  Frontmatter,
  GetCategories,
  GetSlugs,
  GetAllContentPaths,
  GetContent,
  GetCategory,
  GetGallery,
  ImageKitImage,
} from "./types";

const contentDirectory = join(process.cwd(), "content");

const notUnderscored = (s: string): boolean => !s.startsWith("_");

const slugify = (s: string): string => s.replace("_", "-").replace(".md", "");

const unslugify = (s: string): string => s.replace("-", "_");

export const getContentCategories: GetCategories = () =>
  fs.readdirSync(contentDirectory).filter(notUnderscored);

export const getSlugs: GetSlugs = (category) =>
  fs
    .readdirSync(join(contentDirectory, category))
    .filter((x) => x.endsWith(".md"))
    .map(slugify);

export const getAllContentPaths: GetAllContentPaths = () =>
  getContentCategories().flatMap((category) =>
    getSlugs(category).map((slug) => ({ category, slug }))
  );

export const getContent: GetContent = (category, slug) => {
  const path = join(contentDirectory, category, unslugify(slug) + ".md");
  const raw = fs.readFileSync(path, "utf8");
  const { data, content } = matter(raw);
  const html = marked(content || "");
  if (data.date && data.date.toJSON) {
    data.date = data.date.toJSON();
  }
  data.image = data.image || "header.jpg";
  return {
    frontmatter: data as Frontmatter,
    html: html,
    fields: { category, slug },
  };
};

const compare = <T>(a: T, b: T, sortBy: (x: T) => number) => {
  const resultA = sortBy(a);
  const resultB = sortBy(b);
  if (resultA == resultB) {
    return 0;
  }
  if (resultA > resultB) {
    return 1;
  }
  return -1;
};

const mySort = <T, K>(array: T[], sortBy: (x: T) => number) => {
  array.sort((a, b) => compare(a, b, sortBy));
};

export const getCategory: GetCategory = (category, qp) => {
  const slugs = getSlugs(category);
  const contents = slugs.map((slug) => getContent(category, slug));
  const sortBy = qp?.sortBy;
  if (sortBy) {
    mySort(contents, sortBy);
  }
  if (qp?.limit) {
    return contents.slice(0, qp.limit);
  }
  return contents;
};

const IMAGE_KIT_FILES_API = "https://api.imagekit.io/v1/files";
const IMAGE_KIT_GALLERIES = IMAGE_KIT_FILES_API + "?path=galleries/";
const IMAGE_KIT_PRIVATE_KEY = process.env.IMAGE_KIT_PRIVATE_KEY;

export const getGallery: GetGallery = async (name) => {
  const resp = await fetch(IMAGE_KIT_GALLERIES + name, {
    headers: {
      Authorization:
        "Basic " + Buffer.from(IMAGE_KIT_PRIVATE_KEY + ":").toString("base64"),
    },
  });
  const json = (await resp.json()) as ImageKitImage[];
  const names = json.map((item) => `galleries/${name}/${item.name}`);
  names.sort();
  return names;
};
