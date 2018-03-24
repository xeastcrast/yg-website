import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import {
  Grid,
  Divider,
  Button,
  Icon,
  Header,
  Menu,
  Modal,
  Responsive,
  Loader,
  Dimmer
} from "semantic-ui-react";

import RegisterComponent from "../Register/Register";

export default class LoginComponent extends Component {
  state = {
    register: false
  };

  handleClose = () => {
    this.setState({ register: false });
  };

  render() {
    const { register } = this.state;
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <p className="title">ระบบจัดการไอดี</p>
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
                  <FontIcon className="material-icons">account_box</FontIcon>
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
              animated="fade"
              fluid
              color="orange"
              onClick={() =>
                this.setState({
                  register: !this.state.register
                })
              }
            >
              <Button.Content visible>สมัครสมาชิก</Button.Content>
              <Button.Content hidden>ฟรี</Button.Content>
            </Button>
            <Dialog
              title="สมัครสมาชิก Yulgang"
              titleClassName="dialog-form-title"
              bodyClassName="dialog-form-body"
              paperClassName="dialog-form-paper"
              overlayClassName="dialog-form-overlay"
              autoScrollBodyContent={true}
              modal={true}
              open={register}
              actions={[
                <FlatButton
                  label="ยกเลิก"
                  primary={true}
                  onClick={this.handleClose}
                />
              ]}
            >
              <RegisterComponent />
            </Dialog>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
