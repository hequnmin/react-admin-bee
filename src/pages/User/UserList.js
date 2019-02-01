import React, { Component } from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput, Filter, Responsive, SimpleList} from 'react-admin';


const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

class UserList extends Component {
  state = {};

  render() {
    return (
      <List {...this.props} filters={<UserFilter />}>
        <Responsive
          small={
            <SimpleList
              primaryText={record => record.userNo}
              secondaryText={record => record.userName}
              tertiaryText={record => record.email}
            />
          }
          medium={
            <Datagrid>
              <TextField label="NO." source="userNo" />
              <TextField label="Nick name" source="userName" />
              <TextField label="E-Mail" source="email" />
              <TextField label="Mobile" source="mobile" />
              <EditButton />
              <DeleteButton />
            </Datagrid>
          }
        />
      </List>
    );
  }
}

export default UserList;
