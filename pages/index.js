import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
class Index extends Component {
  render() {
    return (
      <Layout userAgent={this.props.userAgent}
        head={
          <title>หน้าแรก</title>
        }
      >
      </Layout>
    );
  }
}

export default Index;
