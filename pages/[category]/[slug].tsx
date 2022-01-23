import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import type { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize"

import { getAllContentPaths, getContent, getGallery } from "../../lib/api";
import { PagePath, ContentPageProps, Galleries } from "../../lib/types";
import ContentPage from "../../components/ContentPage";

const CategorySlugPage: NextPage<ContentPageProps> = (props) => (
  <ContentPage {...props} />
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as PagePath;
  const content = getContent(params.category, params.slug);
  const mdxSource = await serialize(content.markdown)
  const galleries = {} as Galleries;
  if (content.frontmatter.gallery) {
    content.frontmatter.galleries.push(content.frontmatter.gallery)
  }
  for (const name of content.frontmatter.galleries) {
    galleries[name] = await getGallery(name);
  }
  return {
    props: { frontmatter: content.frontmatter, mdxSource, galleries },
  };
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths().map((x) => ({ params: x }));
  return { paths, fallback: false };
};

export default CategorySlugPage;
