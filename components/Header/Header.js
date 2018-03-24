import React, { Component } from "react";
import Head from "next/head";
import { Container, Segment, Dimmer, Loader } from "semantic-ui-react";

import Nav from "../Navigation/Nav";
import RegisterComponent from "../Register/Register";
import LoginComponent from "../Login/Login";

export default class HeaderComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 500);
  }

  state = {
    register: false,
    loaded: false
  };

  styles = {
    lessPadBottom: {
      paddingBottom: 0
    },
    lessPadTop: {
      paddingTop: 0
    }
  };

  render() {
    return this.state.loaded ? (
      <div>
        <div className="bgApp1" />
        <div className="model-left" />
        <div className="model-right" />
        <Container fluid className="header-section">
          <Segment className="login-segment" size="small">
            <LoginComponent />
          </Segment>
        </Container>
        <Container fluid className="navbar">
          <Nav />
        </Container>

        <div style={{ height: "5000px", width: "100%" }} />
      </div>
    ) : (
      <Dimmer active>
        <Loader>กำลังโหลด...</Loader>
      </Dimmer>
    );
  }
}
