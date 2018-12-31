import React from "react";
import App, { Container } from "next/app";
import { PageContext, Page } from "../interfaces";

// workaround unitil https://github.com/zeit/next-plugins/issues/351 is fixed.
import "antd/dist/antd.less";

interface AppContext {
  Component: Page,
  router: object,
  ctx: PageContext
};

interface AppProps {
  Component: React.ReactNode,
  pageProps: object
};

export default class MyApp extends App<AppProps> {
  static async getInitialProps(context: AppContext) {
    let pageProps = {};

    if (context.Component.getInitialProps) {
      pageProps = await context.Component.getInitialProps(context.ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
