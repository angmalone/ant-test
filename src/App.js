import React, { Component } from "react";
import "./App.css";
import { Menu, Icon } from "antd";
import EditSnack from "./EditSnack";
import AddSnack from "./AddSnack";
import Snack from "./Snack";
import axios from "axios";

class App extends Component {
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            Home
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user" />
            Login
          </Menu.Item>
        </Menu>

        <AddSnack />
        <Snack />
      </div>
    );
  }
}

export default App;
