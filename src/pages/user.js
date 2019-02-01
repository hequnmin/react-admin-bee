import React from 'react';
// import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import { List, Datagrid, TextField, EmailField,
  Responsive, SimpleList,
  // ImageField,
} from 'react-admin';
// import MyUrlField from './MyUrlField';

export const UserList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.userName}
          // secondaryText={record => record.address.street}
          secondaryText={record => record.mobile}
          tertiaryText={record => record.email}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          {/*<ImageField source="avatar" src="url" />*/}
          <TextField source="userNo" />
          <TextField source="userName" />
          <EmailField source="email" />
          <TextField source="mobile" />
        </Datagrid>
      }
    />
  </List>
);

