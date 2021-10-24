import React, { VFC } from "react";
import Image from "next/image";
import { nextImageProps } from "../lib/imageUtils";
import meta from "../content/_meta/footer.json";

const Footer: VFC = () => (
  <footer className="footer has-text-white">
    <div className="container has-text-centered">
      <div className="columns">
        {meta.map((item) => (
          <div className="column is-one-quarter" key={item.link}>
            <div style={{ padding: "1em" }}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Image
                  {...nextImageProps(item.image, 650, 450)}
                  alt={item.alt}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ltr">© Tom Gurion</div>
    </div>
  </footer>
);

export default Footer;
