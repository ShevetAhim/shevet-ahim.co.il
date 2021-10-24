import React, { VFC } from "react";

import { ArticleListProps } from "../lib/types";
import Layout from "./Layout";
import ArticleSummary from "./ArticleSummary";

const ArticleList: VFC<ArticleListProps> = ({ title, items, summaryFunc }) => (
  <Layout
    top={{
      title,
      type: "hero",
      image: "header.jpg",
    }}
    head={{
      title,
      image: "header.jpg",
    }}
    narrow={true}
  >
    <section className="section">
      <div className="columns is-multiline">
        {items.map((item) => (
          <ArticleSummary item={item} key={item.fields.slug}>
            <div dangerouslySetInnerHTML={{ __html: summaryFunc(item) }} />
          </ArticleSummary>
        ))}
      </div>
    </section>
  </Layout>
);

export default ArticleList;
