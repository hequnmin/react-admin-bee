import React from 'react';
import { Layout, Menu, Notification, AppBar } from 'react-admin';
// import Menu from './menu';
// import MyAppBar from './MyAppBar';
// import MyNotification from './MyNotification';

const MyLayout = (props) => (
  <Layout {...props} appBar={AppBar} menu={Menu} notification={Notification} />
);

export default MyLayout;
