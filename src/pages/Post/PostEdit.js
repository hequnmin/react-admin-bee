import React, { Component } from 'react';
import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

class PostEdit extends Component {
  state = {};

  render() {

    return (
      <Edit title={<PostTitle/>} {...this.props}>
        <SimpleForm>
          <TextInput label="Title" source="title" />
          <LongTextInput label="Teaser" source="teaser" />
          <RichTextInput label="Content" source="body" />
          <ReferenceInput label="Author" source="userId" reference="users">
            <SelectInput optionText="userName" />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    );
  }
}

export default PostEdit;
