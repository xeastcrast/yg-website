import React, { Component } from "react";
import Head from "next/head";
import { Container } from "semantic-ui-react";

import Root from "../Root";
import HeaderComponent from "../Header/Header";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Root userAgent={this.props.userAgent}>
        <div>
          <Head>{this.props.head}</Head>
          <HeaderComponent />
          <Container fluid className="content">
            {children}
          </Container>
        </div>
      </Root>
    );
  }
}

export default Layout;
