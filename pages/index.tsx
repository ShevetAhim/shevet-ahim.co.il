import type { NextPage } from "next";
import { GetStaticProps } from "next";

import { getCategory } from "../lib/api";
import { IndexProps } from "../lib/types";
import Layout from "../components/Layout";
import Card from "../components/Card";
import ActivityCard from "../components/ActivityCard";
import ArticleSummary from "../components/ArticleSummary";
import TitleAndMore from "../components/TitleAndMore";

import meta from "../content/_meta/index.json";

const Index: NextPage<IndexProps> = (props) => (
  <Layout
    top={{
      type: "header",
      title: meta.title,
      subtitle: meta.subtitle,
      image: "header.jpg",
    }}
  >
    <section className="section">
      <div className="title">{meta.accommodations_title}</div>
      <div className="columns is-multiline">
        {props.accommodations.map((item) => (
          <Card item={item} key={item.fields.slug}>
            {item.frontmatter.summary}
          </Card>
        ))}
      </div>
    </section>

    <section className="section">
      <TitleAndMore
        title={meta.activities_title}
        subtitle={meta.activities_subtitle}
        moreText={meta.activities_link}
        moreSizeClass="is-large"
        moreHref="/activities"
      />
      <div className="columns is-multiline">
        {props.activities.map((item) => (
          <ActivityCard item={item} key={item.fields.slug} />
        ))}
      </div>
    </section>

    <section className="section">
      <div className="columns is-variable is-8">
        <div className="column">
          <TitleAndMore
            title={meta.blog_title}
            moreText={meta.blog_link}
            moreSizeClass="is-medium"
            moreHref="/blog"
          />
          {props.blog.map((item) => (
            <ArticleSummary item={item} key={item.fields.slug}>
              {item.frontmatter.summary}
            </ArticleSummary>
          ))}
        </div>
        <div className="column">
          <TitleAndMore
            title={meta.news_title}
            moreText={meta.news_link}
            moreSizeClass="is-medium"
            moreHref="/news"
          />
          {props.news.map((item) => (
            <ArticleSummary item={item} key={item.fields.slug}>
              <div dangerouslySetInnerHTML={{ __html: item.markdown }} />
            </ArticleSummary>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      accommodations: await getCategory("accommodations", {
        sortBy: (a) => a.frontmatter.order || 0,
      }),
      activities: await getCategory("activities", {
        sortBy: (a) => a.frontmatter.order || 0,
        limit: 3,
      }),
      blog: await getCategory("blog", {
        sortBy: (a) => -1 * Date.parse(a.frontmatter.date || "1970"),
        limit: 4,
      }),
      news: await getCategory("_news", {
        sortBy: (a) => -1 * Date.parse(a.frontmatter.date || "1970"),
        limit: 4,
      }),
    },
  };
};

export default Index;
