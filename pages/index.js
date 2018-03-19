import React, { Component } from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
class Index extends Component {
  render() {
    return (
      <Layout userAgent={this.props.userAgent}>
        <Head>
          <title>หน้าแรก</title>
        </Head>
      </Layout>
    );
  }
}

export default Index;
