import { Card, Button } from "antd";
import React from "react";
import axios from "axios";
import AddSnack from "./AddSnack.js";
import EditSnack from "./EditSnack.js";

class Tip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    /*this.deleteTip = this.deleteTip.bind(this);*/
  }

  /*handleDelete(e) {
    e.preventDefault();
    this.deleteTip()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteTip = snack => {
    const url = `https://pumpbot-test.herokuapp.com/api/tips/${snack._id}`;
    axios
      .delete(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };*/

  /*handleDelete = snack => {
    console.log(snack._id);
    //event.preventDefault();
    //const id = this.state.snacks._id;

    axios
      .delete(`https://pumpbot-test.herokuapp.com/api/tips/${_id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };*/

  /*handleDelete(snack) {
    console.log(`${snack[0]._id}`);

    axios.delete(`https://pumpbot-test.herokuapp.com/api/tips/${snack[0]._id}`);
  }*/

  handleDelete(e) {
    console.log(`${this.state.snacks[0]._id}`);

    axios
      .delete(
        `https://pumpbot-test.herokuapp.com/api/tips/${
          this.state.snacks[0]._id
        }`
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  componentDidMount() {
    axios
      .get("https://pumpbot-test.herokuapp.com/api/tips")
      .then(res => {
        this.setState({
          snacks: res.data
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
      .get("https://pumpbot-test.herokuapp.com/api/tips")
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
          <Card className="snack" style={{ width: 310, height: 350 }}>
            <p>{snack.tip}</p>
            <p className="snackid">{snack._id}</p>
            <div className="links">
              <form onSubmit={this.handleDelete}>
                <Button type="submit" onClick={this.handleDelete}>
                  Delete
                </Button>
                <div className="items">
                  <EditSnack {...snacks} />
                </div>
              </form>
            </div>
          </Card>
        </li>
      );
    });
    return <div className="snack-row">{snacks}</div>;
  }
}

export default Tip;
