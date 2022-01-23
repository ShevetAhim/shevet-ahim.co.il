import React, { VFC } from "react";
import { GetStaticProps } from "next";

import { getCategory } from "../lib/api";
import ArticleList from "../components/ArticleList";
import { BlogAndNewsProps } from "../lib/types";
import meta from "../content/_meta/news.json";

const News: VFC<BlogAndNewsProps> = (props) => (
  <ArticleList
    title={meta.title}
    items={props.items}
    summaryFunc={(item) => item.markdown}
  />
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      items: await getCategory("_news", {
        sortBy: (a) => -1 * Date.parse(a.frontmatter.date || "1970"),
      }),
    },
  };
};

export default News;
