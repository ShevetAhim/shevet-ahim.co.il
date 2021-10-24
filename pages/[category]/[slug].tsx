import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import type { NextPage } from "next";

import { getAllContentPaths, getContent, getGallery } from "../../lib/api";
import { PagePath, ContentPageProps } from "../../lib/types";
import ContentPage from "../../components/ContentPage";

const CategorySlugPage: NextPage<ContentPageProps> = ({ content }) => (
  <ContentPage content={content} />
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as PagePath;
  const content = getContent(params.category, params.slug);
  if (content.frontmatter.gallery) {
    content.gallery = await getGallery(content.frontmatter.gallery);
  }
  return {
    props: { content },
  };
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths().map((x) => ({ params: x }));
  return { paths, fallback: false };
};

export default CategorySlugPage;
