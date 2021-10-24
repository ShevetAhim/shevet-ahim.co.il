import { ImageProps } from "next/image";

type LoaderProps = {
  src: string;
  width: number;
};

type LoaderFunction = {
  (props: LoaderProps): string;
};

type BackgroundLoaderProps = LoaderProps & {
  height: number;
};

const BASE_URL = "https://ik.imagekit.io/gbc/";
const MAX_THUMB_SIZE = 250;

export const loader =
  (w: number, h: number): LoaderFunction =>
  ({ src, width }) =>
    `${BASE_URL}${src}?tr=w-${width},ar-${w}-${h}`;

export const backgroundLoader = (src: string, width: number, height: number) =>
  loader(width, height)({ src, width });

export const nextImageProps = (src: string, width: number, height: number) => {
  return {
    src,
    width,
    height,
    placeholder: "blur" as ImageProps["placeholder"],
    loader: loader(width, height),
    blurDataURL: backgroundLoader(src, width / 10, height / 10) + ",bl-6",
  };
};
