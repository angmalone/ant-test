import React, { Component } from "react";
import "./App.css";
import { Menu, Icon } from "antd";
import AddSnack from "./AddSnack";
import Snack from "./Snack";
import axios from "axios";

class App extends Component {
  /*constructor() {
    super();
    this.state = {
      snacks: []
    };
  }
  componentDidMount() {
    this.getSnacks();
  }
  getSnacks() {
    axios
      .get(`http://localhost:3000/api/snacks`)
      .then(res => {
        this.setState({
          snacks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }*/

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
            <Icon type="home" />Home
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user" />Login
          </Menu.Item>
        </Menu>

        <AddSnack />
        <Snack />
      </div>
    );
  }
}

export default App;
