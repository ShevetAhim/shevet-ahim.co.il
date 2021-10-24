import React, { VFC } from "react";
import { VideoProps } from "../lib/types";

import style from "./Video.module.scss";

const Video: VFC<VideoProps> = ({ title, id }) => {
  const src = `https://www.youtube.com/embed/${id}`;
  return (
    <div className={style.video}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
