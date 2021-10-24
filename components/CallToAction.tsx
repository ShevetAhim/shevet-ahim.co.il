import React, { VFC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { CallToActionProps } from "../lib/types";
import { backgroundLoader } from "../lib/imageUtils";
import style from "./Hero.module.scss";
import meta from "../content/_meta/call_to_action.json";

const CallToAction: VFC<CallToActionProps> = ({ image }) => {
  const hero = backgroundLoader(image, 1200, 600);
  const heroOverlay = backgroundLoader("header_overlay.png", 256, 256);
  return (
    <section
      className={classNames("hero", style.hero)}
      style={{
        backgroundImage: `url(${heroOverlay}), url(${hero})`,
      }}
    >
      <div className="hero-body has-text-centered">
        <div className={classNames("title has-text-white", style.title)}>
          {meta.cta}
        </div>
        <Link href="/contact">
          <a className="button is-large">{meta.buttonText}</a>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
