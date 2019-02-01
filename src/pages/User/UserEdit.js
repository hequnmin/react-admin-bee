import React, { Component } from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.userNo}"` : ''}</span>;
};

class UserEdit extends Component {
  state = {};

  render() {

    return (
      <Edit title={<UserTitle/>} {...this.props}>
        <SimpleForm>
          <TextInput label="NO." source="userNo" />
          <TextInput label="Nick name." source="userName" />
          <TextInput label="Name" source="realName" />
          <TextInput label="E-Mail" source="email" />
          <TextInput label="Mobile" source="mobile" />
        </SimpleForm>
      </Edit>
    );
  }
}

export default UserEdit;
