import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import UserDetails from './pages/UserDetails';
import UserList from './pages/UserList';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={UserList} exact/>
      <Route path="/user/:name" component={UserDetails} />
    </Switch>
  </BrowserRouter>
)

export default Routes;