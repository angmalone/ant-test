import { Card, Icon, Button } from "antd";
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
            style={{ width: 300 }}
          >
            <p>{snack.name}</p>
            <p>{snack.requestedBy}</p>
            <a href={`${snack.amazonURL}`} target="_blank">
              LINK
            </a>
            <Button className="vote">
              <Icon type="heart-o" />
            </Button>
          </Card>
        </li>
      );
    });
    return <div className="snack-row">{snacks}</div>;
  }
}

export default Snack;
