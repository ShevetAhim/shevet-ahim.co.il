import React, { VFC } from "react";

import Head from "./Head";
import Header from "./Header";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import NavBar from "./Navbar";

import { LayoutProps } from "../lib/types";
import classNames from "classnames";

const Layout: VFC<LayoutProps> = ({ top, head = {}, narrow = false, children }) => {
  return (
    <>
      <Head {...head} />

      <NavBar />

      {top.type === "header" && (
        <Header title={top.title} subtitle={top.subtitle} image={top.image} />
      )}
      {top.type === "hero" && <Hero image={top.image} title={top.title} />}

      <div className={classNames("container", { "is-max-desktop": narrow })}>
        {children}
      </div>

      <CallToAction image={top.image} />
      <Footer />
    </>
  );
};

export default Layout;
