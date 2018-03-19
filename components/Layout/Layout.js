import React, { Component } from "react";

import Root from "../Root";
import HeaderComponent from "../Header/Header";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Root userAgent={this.props.userAgent}>
        <div>
          <HeaderComponent />
          {children}
        </div>
      </Root>
    );
  }
}

export default Layout;
