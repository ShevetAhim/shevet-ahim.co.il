import React, { VFC } from "react";
import Link from "next/link";
import { CardProps } from "../lib/types";

const Linkified: VFC<CardProps> = ({ item, children }) => {
  if (item.frontmatter.link) {
    return (
      <a href={item.frontmatter.link} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (item.frontmatter.youtube_id) {
    return (
      <a
        href={`https://www.youtube.com/watch/${item.frontmatter.youtube_id}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  if (item.fields && item.fields.category && item.fields.slug) {
    return (
      <Link href={`/${item.fields.category}/${item.fields.slug}`}>
        <a>{children}</a>
      </Link>
    );
  }

  return <>{children}</>;
};

export default Linkified;
