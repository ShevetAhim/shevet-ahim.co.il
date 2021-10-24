import React, { VFC } from "react";
import Link from "next/link";
import classNames from "classnames";

import style from "./TitleAndMore.module.scss";
import { TitleAndMoreProps } from "../lib/types";

const TitleAndMore: VFC<TitleAndMoreProps> = ({
  title,
  subtitle,
  moreText,
  moreHref,
  moreSizeClass,
}) => (
  <div className={style.container}>
    <div>
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
    <Link href={moreHref}>
      <a className={classNames("button", moreSizeClass, style.button)}>
        {moreText}
      </a>
    </Link>
  </div>
);

export default TitleAndMore;
