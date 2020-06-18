import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route component={SignIn} exact path="/"/>
    <Route component={SignUp} path="/signup"/>
  </Switch>
);

export default Routes;
