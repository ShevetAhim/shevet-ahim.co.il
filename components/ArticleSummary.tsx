import React, { VFC } from "react";
import Image from "next/image";
import classNames from "classnames";

import style from "./ArticleSummary.module.scss";
import Linkified from "./Linkified";
import { CardProps } from "../lib/types";
import { nextImageProps } from "../lib/imageUtils";

const ArticleSummary: VFC<CardProps> = ({ item, children }) => (
  <div className={classNames("media", style.card)}>
    <div className="media-left">
      <figure className="image is-128x128">
        <Image {...nextImageProps(item.frontmatter.image, 128, 128)} />
      </figure>
    </div>
    <div className="media-content">
      <Linkified item={item}>
        <div className={classNames("subtitle", "is-4", "mb-1", style.title)}>
          {item.frontmatter.title}
        </div>
        <div className={classNames("content", style.content)}>
          {item.frontmatter.date && (
            <time className="mb-1">{item.frontmatter.date}</time>
          )}
          <div>{children}</div>
        </div>
      </Linkified>
    </div>
  </div>
);

export default ArticleSummary;
