import React, { Component } from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'react-admin';

class PostCreate extends Component{
  state = {};

  handleChange = (e) => {
    console.log(e);
  };

  render() {
    console.log(this.props);
    const redirect = (basePath, id, data) => {
      console.log(basePath);
      console.log(id);
      console.log(data);
      return ('/posts');
    };

    return (
      <Create {...this.props}>
        <SimpleForm redirect={redirect}>
          <TextInput label="Title" source="title"/>
          <LongTextInput label="Content" source="body"/>
          <ReferenceInput label="Author" source="userId" reference="users" onChange={e => this.handleChange(e)}>
            <SelectInput optionText="userName" />
          </ReferenceInput>
        </SimpleForm>
      </Create>
    );
  }
}

export default PostCreate;
