import React, { VFC } from "react";
import NextHead from "next/head";

import { HeadProps } from "../lib/types";
import meta from "../content/_meta/head.json";
import { backgroundLoader } from "../lib/imageUtils";
import { useRouter } from "next/router";

const HOSTNAME = "https://shevet-ahim.co.il";

const Head: VFC<HeadProps> = ({ title, description, image }) => {
  const router = useRouter();
  const composedTitle = title ? `${meta.titlePrefix} | ${title}` : meta.title;
  const composedDescription = description || meta.description;
  const composedImage = backgroundLoader(image || meta.image, 256, 256);
  return (
    <NextHead>
      <title>{composedTitle}</title>
      <meta name="description" content={composedDescription} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={composedTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HOSTNAME + router.asPath} />
      <meta property="og:image" content={composedImage} />
      <meta property="og:image:secure_url" content={composedImage} />
      <meta property="og:description" content={composedDescription} />

      {/* Twitter cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={composedImage} />
    </NextHead>
  );
};

export default Head;
