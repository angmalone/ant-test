import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Form, Input } from "antd";
import axios from "axios";

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Edit"
          okText="Edit!"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Tip">
              {getFieldDecorator("tip", {
                rules: [
                  {
                    required: true,
                    message: "Please enter text!"
                  }
                ]
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class EditSnack extends React.Component {
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
      axios.put(
        "https://pumpbot-test.herokuapp.com/api/tips/5bb244cf1d88ee0004389828",
        {
          tip: values.tip
        }
      );
      console.log("Received values of form: ", values);
      console.log(JSON.stringify(values));
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
        <Button
          className="edit"
          type="primary"
          className="snack"
          onClick={this.showModal}
        >
          Edit
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

export default EditSnack;
