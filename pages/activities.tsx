import React, { VFC } from "react";
import { GetStaticProps } from "next";

import { ActivitiesProps } from "../lib/types";
import { getCategory } from "../lib/api";
import Layout from "../components/Layout";
import ActivityCard from "../components/ActivityCard";

import meta from "../content/_meta/activities.json";

const Activities: VFC<ActivitiesProps> = (props) => (
  <Layout
    top={{
      type: "hero",
      title: meta.title,
      image: "activities/main.jpg",
    }}
    head={{
      title: meta.title,
      image: "activities/main.jpg",
      description: meta.intro,
    }}
  >
    <section className="section">
      <div className="subtitle">
        <p>{meta.intro}</p>
      </div>
      <div className="columns is-multiline">
        {props.activities.map((item) => (
          <ActivityCard item={item} key={item.fields.slug} />
        ))}
      </div>
    </section>
  </Layout>
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      activities: await getCategory("activities", {
        sortBy: (a) => a.frontmatter.order || 0,
      }),
    },
  };
};

export default Activities;
