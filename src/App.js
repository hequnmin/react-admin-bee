import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

import chineseMessages from './locale/ra-language-chinese';
import { lightTheme } from './themes';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import dataProvider from './dataProvider';    // 自定义数据提供商
import authProvider from './authProvider';
import { Dashboard } from './pages/dashboard';
import { UserList } from './pages/users';
import PostList from './pages/Post/PostList';
import PostEdit from './pages/Post/PostEdit';
import PostCreate from './pages/Post/PostCreate';
import { TodoList } from './pages/todos';


// import chineseMessages from 'ra-language-chinese';
// import { NotFound } from './pages/notfound';
// import Menu from './menu';
// import MyLayout from './layout';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const dataProvider = jsonServerProvider('http://localhost:3000');

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
    theme={lightTheme}
  >
    <Resource name="user" icon={UserIcon} list={UserList} />
    <Resource name="posts" icon={PostIcon} list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name="todos" list={TodoList} />
  </Admin>
);

export default App;

