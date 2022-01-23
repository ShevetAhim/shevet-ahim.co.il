import { ReactNode } from "react";

export type PagePath = {
  category: string;
  slug: string;
};

export type Gallery = string[]

export type Galleries = {
  [name: string]: Gallery;
};

export type PageContent = {
  frontmatter: Frontmatter;
  markdown: string;
  fields: { category: string; slug: string };
};

export type Frontmatter = {
  title: string;
  image: string;
  galleries: string[];
  author?: Author;
  summary?: string;
  youtube_id?: string;
  date?: string;
  link?: string;
  order?: number;
  duration?: string;
  price?: string;
  gallery?: string;
};

export type Author = {
  name: string;
  image: string;
};

export type Navbar = NavbarMenu[];

export type NavbarMenu = {
  title: string;
  path?: string;
  items?: NavbarLink[];
};

export type NavbarLink = {
  title: string;
  path: string;
};

// Pages' props

export type IndexProps = {
  accommodations: PageContent[];
  activities: PageContent[];
  blog: PageContent[];
  news: PageContent[];
};

export type ActivitiesProps = Pick<IndexProps, "activities">;

export type BlogAndNewsProps = {
  items: PageContent[];
};

export type ContentPageProps = {
  frontmatter: Frontmatter;
  mdxSource: any;
  galleries: Galleries;
  children?: ReactNode;
};

// Components' props

export type ArticleListProps = {
  title: string;
  items: PageContent[];
  summaryFunc: (x: PageContent) => string;
};

export type LayoutProps = {
  top: HeaderProps | HeroProps;
  head?: HeadProps;
  narrow?: boolean;
  children: ReactNode;
};

export type HeaderProps = {
  title: string;
  subtitle: string;
  image: "header.jpg";
  type: "header";
};

export type HeroProps = {
  title: string;
  image: string;
  type: "hero";
};

export type CardProps = {
  item: Omit<PageContent, "html">;
  children: ReactNode;
};

export type ActivityCardProps = {
  item: Omit<PageContent, "html">;
};

export type TitleAndMoreProps = {
  title: string;
  subtitle?: string;
  moreText: string;
  moreHref: string;
  moreSizeClass: string;
};

export type ImageOrYoutubeProps = {
  item: Omit<PageContent, "html">;
  width: number;
  height: number;
};

export type VideoProps = {
  title: string;
  id: string;
};

export type GalleryProps = {
  name: string;
};

export type CallToActionProps = {
  image: string;
};

export type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
};

export type PostMetadataProps = {
  author: Author;
  date: string;
};

// API

type SortBy = {
  (a: PageContent): number;
};

type QueryParams = {
  limit?: number;
  sortBy?: SortBy;
};

export type GetCategories = {
  (): string[];
};

export type GetSlugs = {
  (category: string): string[];
};

export type GetAllContentPaths = {
  (): PagePath[];
};

export type GetContent = {
  (category: string, slug: string): PageContent;
};

export type GetCategory = {
  (category: string, qp?: QueryParams): PageContent[];
};

export type AuthorSlug = "irit" | "izhar" | "tom";

export type GetAuthor = {
  (slug: AuthorSlug): Author;
};

export type GetGallery = {
  (name: string): Promise<Gallery>;
};

export type ImageKitImage = {
  name: string;
};

export type FormatDate = {
  (date: string): string;
};
