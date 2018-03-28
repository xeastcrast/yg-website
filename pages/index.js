import React, { Component } from "react";
import { initStore } from '../store/store'
import withRedux from 'next-redux-wrapper'


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

export default withRedux(initStore)(Index);
