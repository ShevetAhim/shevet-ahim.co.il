import React from "react";
import { GetStaticProps } from "next";
import { NextPage } from "next";

import { getContent } from "../lib/api";
import { ContentPageProps } from "../lib/types";
import ContentPage from "../components/ContentPage";

const About: NextPage<ContentPageProps> = ({ content }) => (
  <ContentPage content={content} />
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => ({
  props: { content: getContent("_pages", "about") },
});

export default About;
