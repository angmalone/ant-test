import {Form, Input} from 'antd';
import React from "react";

class TestForm extends React.Component {

<Form>
    <Form.Item
      label="Title"
      validateStatus='error'
      help='Oh no! Did you forget to include a title?'>
      <Input
        name='title'
        value={ entry.title }
        onChange={ this.onChange } />
  </Form.Item>
</Form>

export default TestForm;