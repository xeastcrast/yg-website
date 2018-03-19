import React, { Component } from "react";
import Head from "next/head";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import {
  Grid,
  Container,
  Segment,
  Divider,
  Button,
  Icon,
  Header,
  Modal,
  Menu,
  Responsive,
  Loader,
  Dimmer
} from "semantic-ui-react";

import stylesheet from "../../styles/header.scss";
import Nav from "../Navigation/Nav";
import RegisterComponent from "../register";

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
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <div className="bgApp1" />
        <div className="model-left" />
        <div className="model-right" />
        <Container fluid className="header-section">
          <Segment className="login-segment" size="small">
            <Grid stackable>
              <Grid.Row>
                <Grid.Column>
                  <p className="title">รับจัดการไอดี</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <TextField
                    fullWidth
                    hintStyle={{ color: "#bebebe" }}
                    hintText="ไอดี"
                    floatingLabelText={
                      <div className="field-label-icon">
                        <FontIcon className="material-icons">
                          account_box
                        </FontIcon>
                        <label style={{ color: "#fafafa" }}>Username</label>
                      </div>
                    }
                  />
                  <TextField
                    fullWidth
                    hintStyle={{ color: "#bebebe" }}
                    hintText="รหัสผ่าน"
                    type="password"
                    floatingLabelText={
                      <div className="field-label-icon">
                        <FontIcon className="material-icons">lock</FontIcon>
                        <label style={{ color: "#fafafa" }}>Password</label>
                      </div>
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Button inverted basic fluid color="teal">
                    เข้าสู่ระบบ
                  </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button inverted basic fluid color="red">
                    ลืมรหัสผ่าน
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Divider horizontal style={{ color: "#fff" }}>
                  หรือ
                </Divider>
                <Grid.Column width={16}>
                  <Button
                    inverted
                    fluid
                    color="orange"
                    onClick={() =>
                      this.setState({
                        register: !this.state.register
                      })
                    }
                  >
                    สมัครสมาชิก
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        <Nav />
        <Modal trigger={<Button>Basic Modal</Button>} size="small">
          <Header icon="archive" content="Archive Old Messages" />
          <Modal.Content>
            <p>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" inverted>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
        <div style={{ height: "5000px", width: "100%" }} />
      </div>
    ) : (
      <Dimmer active>
        <Loader>กำลังโหลด...</Loader>
      </Dimmer>
    );
  }
}
