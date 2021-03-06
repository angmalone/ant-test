import React, { Component } from "react";
import AddSnack from "../AddSnack";
import Snack from "../Snack";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && (
          <div>
            <AddSnack />
            <Snack />
          </div>
        )}
        {!isAuthenticated() && (
          <div className="warning">
            <h4>
              You are not logged in! Please{" "}
              <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
                Log In
              </a>{" "}
              to continue.
            </h4>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
