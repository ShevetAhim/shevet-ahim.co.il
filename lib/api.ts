import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize"
import authors from "../content/_meta/authors.json";

import {
  Frontmatter,
  GetCategories,
  GetSlugs,
  GetAllContentPaths,
  GetContent,
  GetCategory,
  GetGallery,
  ImageKitImage,
  GetAuthor,
  Author,
  AuthorSlug,
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

export const getContent: GetContent = async (category, slug) => {
  const path = join(contentDirectory, category, unslugify(slug) + ".md");
  const raw = fs.readFileSync(path, "utf8");
  const { data: frontmatter, content: markdown } = matter(raw);
  const mdxSource = await serialize(markdown)
  if (frontmatter.date && frontmatter.date.toJSON) {
    frontmatter.date = frontmatter.date.toJSON();
  }
  if (frontmatter.author && typeof frontmatter.author == "string") {
    frontmatter.author = getAuthor(frontmatter.author as AuthorSlug);
  }
  frontmatter.image = frontmatter.image || "header.jpg";
  frontmatter.galleries = frontmatter.galleries || [];
  return {
    frontmatter: frontmatter as Frontmatter,
    mdxSource,
    markdown,
    fields: { category, slug },
  };
};

export const getAuthor: GetAuthor = (slug) => authors[slug] as Author;

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

export const getCategory: GetCategory = async (category, qp) => {
  const slugs = getSlugs(category);
  const contents = await Promise.all(slugs.map(async (slug) => getContent(category, slug)));
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
