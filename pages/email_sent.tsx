import React from "react";
import { GetStaticProps } from "next";
import { NextPage } from "next";

import { getContent } from "../lib/api";
import { ContentPageProps } from "../lib/types";
import ContentPage from "../components/ContentPage";

const EmailSent: NextPage<ContentPageProps> = (props) => (
  <ContentPage {...props} />
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => ({
  props: { ...await getContent("_pages", "email_sent") },
});

export default EmailSent;
