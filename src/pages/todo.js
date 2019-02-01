import React from 'react';
import { List, Datagrid, ReferenceField, TextField, BooleanField } from 'react-admin';


export const TodoList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <BooleanField source="completed"/>
      <ReferenceField source="userId" reference="users">
        <TextField source="name"/>
      </ReferenceField>
      <TextField source="id"/>
      <TextField source="title"/>
    </Datagrid>
  </List>
);
