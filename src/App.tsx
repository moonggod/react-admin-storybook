// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import users from './views/users';
import post from './views/post';
import Dashboard from './views/dashboard';
// import jsonServerProvider from 'ra-data-json-server';
import authProvider from './dataProvider/authProvider';
import dataProvider from './dataProvider/dataProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" {...users} />
    <Resource name="posts" {...post} />
    <Resource name="comments" />
  </Admin>
);

export default App;