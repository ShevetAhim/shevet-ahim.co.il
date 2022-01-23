import React, { VFC, useState, useContext } from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";

import { GalleriesContext } from "../lib/contexts";
import { nextImageProps } from "../lib/imageUtils";
import { GalleryProps } from "../lib/types";

const Gallery: VFC<GalleryProps> = ({ name }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const open = () => setDialogIsOpen(true);
  const close = () => setDialogIsOpen(false);
  const galleries = useContext(GalleriesContext);
  const sources = galleries[name];

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
            <Image
              {...nextImageProps(src, 800, 450)}
              alt={`Gallery image ${index}`}
            />
          </a>
        </div>
      ))}

      <Dialog open={dialogIsOpen} onClose={close} maxWidth="lg">
        <Image
          {...nextImageProps(sources[selectedImage], 800, 450)}
          alt="Gallery image"
        />
      </Dialog>
    </div>
  );
};

export default Gallery;
