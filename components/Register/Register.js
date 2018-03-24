import React, { Component } from "react";
import swal2 from "sweetalert2";
import {
  Grid,
  Popup,
  Container,
  Segment,
  List,
  Label,
  Header,
  Button
} from "semantic-ui-react";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import RadioButton from "material-ui/RadioButton";
import RadioButtonGroup from "material-ui/RadioButton/RadioButtonGroup";
import axios from "axios";
class RegisterComponent extends Component {
  state = {
    //initial value
    regData: {
      user: "",
      pass: "",
      repass: "",
      email: "",
      phone: "",
      fname: "",
      lname: "",
      gender: "male",
      question: "",
      answer: ""
    }
  };

  handleTextField = evt => {
    this.setState({
      regData: {
        ...this.state.regData,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleRegister = () => {
    axios
      .post("http://localhost:3000/user/register", {
        ...this.state
      })
      .then(result => {
        alert(JSON.stringify(result.data));
      });
  };

  render() {
    return (
      <Grid columns={3} stackable>
        <Grid.Column width={16}>
          <Popup
            trigger={
              <TextField
                fullWidth
                hintStyle={{ color: "#bebebe" }}
                hintText="ไอดี"
                name="user"
                onChange={this.handleTextField}
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">account_box</FontIcon>
                    <label style={{ color: "#fafafa" }}>Username</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>ตัวอักษร A-Z a-z สามารถใช้ _ ได้</List.Item>
                <List.Item>ตัวเลข 0-9</List.Item>
                <List.Item>
                  ไม่สามารถใช้อักขระพิเศษใดๆได้ เช่น [], @, $, #
                </List.Item>
                <List.Item>ตั้งแต่ 4 - 12 ตัวอักษร</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="password"
                name="pass"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="รหัสผ่าน"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">lock</FontIcon>
                    <label style={{ color: "#fafafa" }}>Password</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>ตัวอักษร A-Z a-z</List.Item>
                <List.Item>สามารถใช้อักขระพิเศษได้</List.Item>
                <List.Item>ตัวเลข 0-9</List.Item>
                <List.Item>ตั้งแต่ 4 - 12 ตัวอักษร</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                name="repass"
                type="password"
                hintStyle={{ color: "#bebebe" }}
                onChange={this.handleTextField}
                hintText="ยืนยัน-รหัสผ่าน"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">lock</FontIcon>
                    <label style={{ color: "#fafafa" }}>Re-Password</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>กรอกรหัสผ่านอีกครั้ง</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="email"
                name="email"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="อีเมล์"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">mail</FontIcon>
                    <label style={{ color: "#fafafa" }}>E-mail</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>กรอกอีเมล์ของคุณ</List.Item>
                <List.Item>ตัวอย่าง something@domain.com</List.Item>
                <List.Item>ใช้ยืนยันตัวตน และ เพื่อเปลี่ยนรหัสผ่าน</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="text"
                name="phone"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="มือถือ"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">phone</FontIcon>
                    <label style={{ color: "#fafafa" }}>Phone</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>เบอร์มือถือ</List.Item>
                <List.Item>ใช้ลบตัวละคร</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="text"
                name="fname"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="ชื่อ"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">face</FontIcon>
                    <label style={{ color: "#fafafa" }}>FirstName</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>ชื่อจริง</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="text"
                name="lname"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="นามสกุล"
                floatingLabelText={
                  <div className="field-label-icon">
                    <label style={{ color: "#fafafa" }}>LastName</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>นามสกุล</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Header as="h3" style={{ color: "#fafafa" }}>
            <i className="material-icons">accessibility</i>
            เพศ
          </Header>
          <RadioButtonGroup
            name="gender"
            onChange={this.handleTextField}
            defaultSelected="male"
            className="radio-field"
          >
            <RadioButton value="male" label="ผู้ชาย" />
            <RadioButton value="female" label="ผู้หญิง" />
          </RadioButtonGroup>
        </Grid.Column>
        <Grid.Column width={16}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="text"
                name="question"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="คำถามเพื่อความปลอดภัย?"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">
                      verified_user
                    </FontIcon>
                    <label style={{ color: "#fafafa" }}>
                      Security Question?
                    </label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>
                  คำถามเพื่อความปลอดภัยใช้สำหรับกรณีที่ผู้เล่นต้องการจะลบตัวละคร
                  เป็นคำถามป้องกันด่านแรกก่อนที่จะยืนยันด้วยเบอร์มือถือ
                </List.Item>
                <List.Item>ใช้ลบตัวละคร</List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Popup
            trigger={
              <TextField
                fullWidth
                type="text"
                name="answer"
                onChange={this.handleTextField}
                hintStyle={{ color: "#bebebe" }}
                hintText="คำตอบ"
                floatingLabelText={
                  <div className="field-label-icon">
                    <FontIcon className="material-icons">lock_open</FontIcon>
                    <label style={{ color: "#fafafa" }}>Answer</label>
                  </div>
                }
              />
            }
            content={
              <List bulleted>
                <List.Item>
                  กรุณาจดจำคำตอบของท่านให้แม่นยำ มิฉะนั้น
                  ท่านอาจเสียสิทธิ์ในการเข้าถึงข้อมูลตัวละคร
                </List.Item>
                <List.Item style={{ color: "#d60437" }}>จำเป็นต้องมี</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button inverted fluid color="teal" onClick={this.handleRegister}>
            สมัครสมาชิก
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegisterComponent;
