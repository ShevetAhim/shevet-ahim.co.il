import React, { VFC, useState } from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";

import { nextImageProps } from "../lib/imageUtils";
import { GalleryProps } from "../lib/types";

const Gallery: VFC<GalleryProps> = ({ sources }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const open = () => setDialogIsOpen(true);
  const close = () => setDialogIsOpen(false);

  return (
    <div className="columns is-multiline">
      {sources.map((src, index) => (
        <div className="column is-one-third" key={src}>
          <a
            onClick={() => {
              open();
              setSelectedImage(index);
            }}
          >
            <Image {...nextImageProps(src, 800, 450)} />
          </a>
        </div>
      ))}

      <Dialog open={dialogIsOpen} onClose={close} maxWidth="lg">
        <Image {...nextImageProps(sources[selectedImage], 800, 450)} />
      </Dialog>
    </div>
  );
};

export default Gallery;
