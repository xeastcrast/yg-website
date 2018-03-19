import React, { Component } from "react";

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
            backgroundColor: "rgba(0,0,0, 0.7)"
          }}
          pointing
          secondary
          size="massive"
          id="navbar"
        >
          <Container>
            <Menu.Item
              name="home"
              content={currentOffset}
              active={true}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="offsetTop"
              content={navbarOffset}
              // active={activeItem === "messages"}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              // active={activeItem === "friends"}
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
