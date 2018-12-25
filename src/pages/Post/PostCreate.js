import React, { Component } from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

class PostCreate extends Component{
  state = {};

  handleChange = (e) => {
    console.log(e);
  };



  render() {
    // console.log(this.props);
    // const redirect = (basePath, id, data) => {
    //   console.log(basePath);
    //   console.log(id);
    //   console.log(data);
    //   return ('/posts');
    // };

    const validatePostCreation = (values) => {
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
          // redirect={redirect}
          validate={validatePostCreation}
        >
          <TextInput label="Title" source="title"/>
          <LongTextInput label="Teaser" source="teaser" />
          <RichTextInput label="Content" source="body" />
          <ReferenceInput label="Author" source="userId" reference="users" onChange={e => this.handleChange(e)}>
            <SelectInput optionText="userName" />
          </ReferenceInput>
        </SimpleForm>
      </Create>
    );
  }
}

export default PostCreate;
