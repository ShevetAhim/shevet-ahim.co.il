import React from "react";
import type { NextPage } from "next";

import { ContentPageProps } from "../lib/types";
import Layout from "./Layout";
import Gallery from "./Gallery";
import PostMetadata from "./PostMetadata";

const ContentPage: NextPage<ContentPageProps> = ({ content, children }) => {
  const { frontmatter, html } = content;
  return (
    <Layout
      top={{
        type: "hero",
        title: frontmatter.title,
        image: frontmatter.image,
      }}
      head={{
        title: frontmatter.title,
        image: frontmatter.image,
        description: frontmatter.summary,
      }}
      narrow={true}
    >
      <section className="section">
        {content.frontmatter.author && content.frontmatter.date && (
          <div className="mb-4">
            <PostMetadata
              author={content.frontmatter.author}
              date={content.frontmatter.date}
            />
          </div>
        )}
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        {content.gallery && <Gallery sources={content.gallery} />}
        {children && <>{children}</>}
      </section>
    </Layout>
  );
};

export default ContentPage;
