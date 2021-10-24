import React, { VFC } from "react";
import Image from "next/image";

import { ImageOrYoutubeProps } from "../lib/types";
import Video from "./Video";
import { nextImageProps } from "../lib/imageUtils";

const ImageOrYoutube: VFC<ImageOrYoutubeProps> = ({ item, width, height }) =>
  item.frontmatter.youtube_id ? (
    <Video id={item.frontmatter.youtube_id} title={item.frontmatter.title} />
  ) : (
    <Image
      {...nextImageProps(item.frontmatter.image, width, height)}
      alt={item.frontmatter.title}
    />
  );

export default ImageOrYoutube;
