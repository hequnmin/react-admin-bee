import React from 'react';
// import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';
// import chineseMessages from 'ra-language-chinese';
import chineseMessages from './locale/ra-language-chinese';

import authProvider from './authProvider';
import { Dashboard } from './pages/dashboard';
import { UserList } from './pages/users';
import PostList from './pages/Post/PostList';
import PostEdit from './pages/Post/PostEdit';
import PostCreate from './pages/Post/PostCreate';

import { TodoList } from './pages/todos';

// import { NotFound } from './pages/notfound';
// import Menu from './menu';
// import MyLayout from './layout';

import { darkTheme, lightTheme } from './themes';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const dataProvider = jsonServerProvider('http://localhost:3000');
import dataProvider from './dataProvider';    // 自定义数据提供商

const messages = {
  'cn': chineseMessages
};
const i18nProvider = locale => messages[locale];

const App = () => (
  <Admin
    locale="cn" i18nProvider={i18nProvider}
    title="Min's React-Admin"
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    // catchAll={NotFound}
    // menu={Menu}
    theme={lightTheme}
    // layout={MyLayout}
  >
    <Resource name="users" icon={UserIcon} list={UserList} />
    <Resource name="posts" icon={PostIcon} list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name="todos" list={TodoList} />
  </Admin>
);

export default App;

