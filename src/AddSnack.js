import { Button, Modal, Form, Input } from "antd";
import axios from "axios";
import React from "react";

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    /*constructor(props) {
      super(props);
      this.state = {
        name: "",
        requestedBy: "",
        amazonURL: ""
      };

      this.captureChange = this.captureChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }

    captureChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    submitForm(e) {
      e.preventDefault();

      axios.post("http://localhost:3000/api/snacks", {
        name: this.state.name,
        requestedBy: this.state.requestedBy,
        amazonURL: this.state.amazonURL
      });
    }*/
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add a Snack!"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Snack">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please enter a snack name!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Amazon Link">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class AddSnack extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button className="add" type="primary" onClick={this.showModal}>
          Add a Snack!
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default AddSnack;
