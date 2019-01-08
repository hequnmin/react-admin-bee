import React, { Component } from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, DeleteButton,
  ReferenceInput, SelectInput, TextInput,
  Filter,
  Responsive, SimpleList} from 'react-admin';


const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty >
      <SelectInput optionText="userName"/>
    </ReferenceInput>
  </Filter>
);

class PostList extends Component {
  state = {};

  render() {
    return (
      <List {...this.props} filters={<PostFilter />}>
        <Responsive
          small={
            <SimpleList
              primaryText={record => record.title}
              secondaryText={record => `${record.views} views`}
              tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
          }
          medium={
            <Datagrid>
              <TextField label="Title" source="title" />
              <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="userName" />
              </ReferenceField>
              <EditButton />
              <DeleteButton />
            </Datagrid>
          }
        />
      </List>
    );
  }
}

export default PostList;
