import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LinkedinCallback from './pages/LinkedinCallback';
import UserDetails from './pages/UserDetails';
import UserList from './pages/UserList';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={UserList} exact/>
      <Route path="/user/:name" component={UserDetails} />
      <Route path="/linkedin" component={LinkedinCallback} />
    </Switch>
  </BrowserRouter>
)

export default Routes;