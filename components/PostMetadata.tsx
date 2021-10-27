import React, { VFC } from "react";
import Image from "next/image";
import { PostMetadataProps } from "../lib/types";
import { formatDate } from "../lib/dateUtils";
import { nextImageProps } from "../lib/imageUtils";

const PostMetadata: VFC<PostMetadataProps> = ({ author, date }) => (
  <div>
    <article className="media">
      <figure className="media-left">
        <div className="image is-64x64">
          <Image {...nextImageProps(author.image, 64, 64)} alt={author.name} />
        </div>
      </figure>
      <div className="media-content">
        <div>
          <div className="mb-2">
            <strong>{author.name}</strong>
          </div>
          <div>
            <time>{formatDate(date)}</time>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default PostMetadata;
