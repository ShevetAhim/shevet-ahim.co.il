import React, { VFC } from "react";
import classNames from "classnames";

import { HeroProps } from "../lib/types";
import { backgroundLoader } from "../lib/imageUtils";
import style from "./Hero.module.scss";

const Hero: VFC<Omit<HeroProps, "type">> = ({ image, title }) => {
  const hero = backgroundLoader(image, 1200, 600);
  const heroOverlay = backgroundLoader("header_overlay.png", 256, 256);
  return (
    <section
      className={classNames("hero", "is-medium", style.hero)}
      style={{
        backgroundImage: `url(${heroOverlay}), url(${hero})`,
      }}
    >
      <div className="hero-body">
        <div
          className={classNames("title", "is-1", "has-text-white", style.title)}
        >
          {title}
        </div>
      </div>
    </section>
  );
};

export default Hero;
