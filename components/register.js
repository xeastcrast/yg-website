import React, { Component } from "react";
import { Grid, Popup, Container, Segment, List } from "semantic-ui-react";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
class RegisterComponent extends Component {
  state = {
    id: '',
    password: '',
  }
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
                hintStyle={{ color: "#bebebe" }}
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
                <List.Item>ตัวอักษร A-Z a-z</List.Item>
                <List.Item>สามารถใช้อักขระพิเศษได้</List.Item>
                <List.Item>ตัวเลข 0-9</List.Item>
                <List.Item>ตั้งแต่ 4 - 12 ตัวอักษร</List.Item>
              </List>
            }
            position="left center"
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegisterComponent;
