import React, { VFC } from "react";
import classNames from "classnames";

import style from "./Card.module.scss";
import Linkified from "./Linkified";
import { CardProps } from "../lib/types";
import ImageOrYoutube from "./ImageOrYoutube";

const Card: VFC<CardProps> = ({ item, children }) => {
  return (
    <div className={classNames("column", "is-one-third", style.card)}>
      <div className="box">
        <Linkified item={item}>
          <div className={style.unboxTop}>
            <ImageOrYoutube item={item} width={800} height={450} />
          </div>
          <div
            className={classNames(
              "subtitle",
              "is-4",
              "mb-2",
              "mt-3",
              style.title
            )}
          >
            {item.frontmatter.title}
          </div>
          <div className={style.content}>
            {item.frontmatter.date && (
              <time className="mb-1">{item.frontmatter.date}</time>
            )}
            {children}
          </div>
        </Linkified>
      </div>
    </div>
  );
};

export default Card;
