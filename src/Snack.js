import { Card /*, Col, Row*/ } from "antd";
import React from "react";
import axios from "axios";

class Snack extends React.Component {
  constructor() {
    super();
    this.state = {
      snacks: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/snacks")
      .then(res => {
        this.setState({
          snacks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let snacks = this.state.snacks.map((snack, index) => {
      return (
        <li key={index}>
          <Card
            className="snack"
            title={`${snack.name}`}
            /*extra={<a href="#">More</a>}*/
            style={{ width: 300 }}
          >
            <p>{snack.name}</p>
            <p>{snack.requestedBy}</p>
            <a href={`${snack.amazonURL}`} target="_blank">
              LINK
            </a>
          </Card>
        </li>
      );
    });
    return <ul>{snacks}</ul>;
  }
}

export default Snack;
