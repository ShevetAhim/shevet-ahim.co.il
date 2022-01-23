import React from "react";
import { GetStaticProps } from "next";
import { NextPage } from "next";

import { getContent } from "../lib/api";
import { ContentPageProps } from "../lib/types";
import ContentPage from "../components/ContentPage";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact: NextPage<ContentPageProps> = (props) => (
  <ContentPage {...props}>
    <ContactForm />
    <br />
    <Map />
  </ContentPage>
);

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => ({
  props: { ...await getContent("_pages", "contact") },
});

export default Contact;
