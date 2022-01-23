import React from "react";
import type { NextPage } from "next";
import { MDXRemote } from 'next-mdx-remote'

import { ContentPageProps } from "../lib/types";
import Layout from "./Layout";
import Gallery from "./Gallery";
import PostMetadata from "./PostMetadata";
import { GalleriesContext } from "../lib/contexts";
import ActivityMetadata from "./ActivityMetadata";

const ContentPage: NextPage<ContentPageProps> = (props) => {
  const { frontmatter, mdxSource, galleries, children } = props
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
        {frontmatter.author && frontmatter.date && (
          <div className="mb-4">
            <PostMetadata
              author={frontmatter.author}
              date={frontmatter.date}
            />
          </div>
        )}
        <GalleriesContext.Provider value={galleries}>
          <div className="content">
            <MDXRemote {...mdxSource} components={{Gallery}} />
          </div>
          {(frontmatter.duration || frontmatter.price) && (
            <div className="mb-4">
              <ActivityMetadata
                duration={frontmatter.duration}
                price={frontmatter.price}
              />
            </div>
          )}
          {frontmatter.gallery && <Gallery name={frontmatter.gallery} />}
          {children && <>{children}</>}
        </GalleriesContext.Provider>
      </section>
    </Layout>
  );
};

export default ContentPage;
