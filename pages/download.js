import React, { Component } from "react";
import Layout from "../components/Layout/Layout";

export default class Download extends Component {
  render() {
    return (
      <Layout userAgent={this.props.userAgent} head={<title>ดาวน์โหลดเกมส์</title>} />
    );
  }
}
