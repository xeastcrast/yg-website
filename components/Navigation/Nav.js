import React, { Component } from "react";
import Router from 'next/router'

import { Responsive, Menu, Container, Sticky } from "semantic-ui-react";

export default class Nav extends Component {
  state = {
    currentOffset: 0,
  };

  constructor() {
    super();
    window.onscroll = () => {
      this.setState({
        currentOffset: window.pageYOffset
      });
    };
  }

  componentDidMount() {
    let navbar = document.getElementById('navbar');
    this.setState({navbarOffset: navbar.offsetTop})
  }

  isActive = (path) => {
    if(path === 'home' && Router.pathname === '/'){
      return true;
    }
    else if(path === (Router.pathname).replace('/', '')){
      return true;
    }
    return false;
  }

  render() {
    const { currentOffset, navbarOffset } = this.state;
    return [
      <Responsive
        key={1}
        minWidth={767}
        maxWidth={Responsive.onlyWidescreen.maxWidth}
        className={`${currentOffset > navbarOffset ? "sticky" : ""}`}
      >
        <Menu
          inverted
          style={{
            background: "radial-gradient(#1e2e42, #0c1a2b)"
          }}
          pointing
          secondary
          size="massive"
          id="navbar"
        >
          <Container>
            <Menu.Item
              name="home"
              content="หน้าแรก"
              active={this.isActive("home")}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="info-server"
              content="ข้อมูลเซิฟเวอร์"
              active={this.isActive("info-server")}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="download"
              content="ดาวน์โหลดเกมส์"
              active={this.isActive("download")}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="shop"
              content="ร้านค้า"
              active={this.isActive("shop")}
              // onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
                // active={activeItem === "logout"}
                // onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
    ];
  }
}
