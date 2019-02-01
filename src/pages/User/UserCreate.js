import React, { Component } from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

class UserCreate extends Component{
  state = {};

  handleChange = (e) => {
    console.log(e);
  };



  render() {

    const validateUserCreation = (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = ['The Title is required'];
      }
      if (!values.body) {
        errors.body = ['The Content is required'];
      }
      return errors
    };

    return (
      <Create {...this.props}>
        <SimpleForm
          validate={validateUserCreation}
        >
          <TextInput label="NO." source="userNo"/>
          <TextInput label="Nick name" source="userName" />
          <TextInput label="Name" source="realName" />
          <TextInput label="E-Mail" source="email" />
          <TextInput label="Mobile" source="mobile" />
        </SimpleForm>
      </Create>
    );
  }
}

export default UserCreate;
