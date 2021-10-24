import React, { VFC } from "react";
import Image from "next/image";

import { backgroundLoader, nextImageProps } from "../lib/imageUtils";
import style from "./Header.module.scss";
import classNames from "classnames";
import { HeaderProps } from "../lib/types";

const Header: VFC<Omit<HeaderProps, "type">> = ({ title, subtitle }) => {
  const header = backgroundLoader("header.jpg", 1200, 600);
  const headerOverlay = backgroundLoader("header_overlay.png", 256, 256);
  return (
    <section
      className={classNames("hero is-fullheight-with-navbar", style.header)}
      style={{
        backgroundImage: `url(${headerOverlay}), url(${header})`,
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className={style.inner}>
            <Image {...nextImageProps("logo-white.png", 250, 90)} />
            <div className="title is-1 has-text-white p-4">{title}</div>
            <div className="subtitle has-text-white">{subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
