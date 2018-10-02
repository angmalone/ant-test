import React, { Component } from "react";
import "./App.css";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import logo from "./engage.png";

class Ant extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Menu.Item key="home" onClick={this.goTo.bind(this, "home")}>
            <Icon type="home" />
            Home
          </Menu.Item>
          {!isAuthenticated() && (
            <Menu.Item key="user" onClick={this.login.bind(this)}>
              <Icon type="user" />
              Login
            </Menu.Item>
          )}
          {isAuthenticated() && (
            <Menu.Item key="user" onClick={this.logout.bind(this)}>
              <Icon type="user" />
              Logout
            </Menu.Item>
          )}
        </Menu>
        {!isAuthenticated() && (
          <div className="login">
            <img className="logo" src={logo} />
            <h1>Tip of the Day Manager</h1>
            <h2>Please Login!</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Ant;
