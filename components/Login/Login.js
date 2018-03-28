import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import axios from "axios";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect } from "react-redux";
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

import { LoginPath } from "../../constants/end_point";
import { actionTypes, changeUiState } from "../../store/store";

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      loginData: {}
    };
    this.swal = withReactContent(swal)
  }

  handleTextField = evt => {
    this.setState({
      loginData: {
        ...this.state.loginData,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleLogin = () => {
    axios.post(LoginPath, this.state.loginData).then(() => {
      this.swal({
        type: "success",
        title: <p>เข้าสู่ระบบสำเร็จ</p>,
        timer: 2000
      })
    }).catch(err=>{
      this.swal({
        type: "error",
        title: "เอ๊ะ!!",
        text: "ไอดี หรือ รหัสผ่านไม่ถูกต้อง!!"
      })
    });
  };

  render() {
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
              name="id"
              onChange={this.handleTextField}
              floatingLabelText={
                <div className="field-label-icon">
                  <FontIcon className="material-icons">account_box</FontIcon>
                  <label style={{ color: "#fafafa" }}>ID</label>
                </div>
              }
            />
            <TextField
              fullWidth
              hintStyle={{ color: "#bebebe" }}
              hintText="รหัสผ่าน"
              type="password"
              name="pass"
              onChange={this.handleTextField}
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
            <Button
              inverted
              basic
              fluid
              color="teal"
              onClick={this.handleLogin}
            >
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
              onClick={() => this.props.triggerUiDialog("regDialog", true)}
            >
              <Button.Content visible>สมัครสมาชิก</Button.Content>
              <Button.Content hidden>ฟรี</Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    triggerUiDialog: (name, state) =>
      changeUiState(
        {
          type: actionTypes.UI_CHANGE,
          name: name,
          state: state
        },
        dispatch
      )
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
