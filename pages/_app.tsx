import React, { VFC } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
