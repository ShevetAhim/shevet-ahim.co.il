import React from "react";
import { GetStaticProps } from "next";
import { NextPage } from "next";

import { getContent } from "../lib/api";
import { ContentPageProps } from "../lib/types";
import ContentPage from "../components/ContentPage";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact: NextPage<ContentPageProps> = ({ content }) => (
  <ContentPage content={content}>
    <ContactForm />
    <br />
    <Map />
  </ContentPage>
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => ({
  props: { content: getContent("_pages", "contact") },
});

export default Contact;