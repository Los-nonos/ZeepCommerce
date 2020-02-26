import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// core components
import Auth from './layouts/Auth.jsx';

import './styles/css/material-dashboard-react.css?v=1.6.0';

const App = () => (
  <Switch>
    <Route path="/auth" component={Auth} />
    <Redirect from="/" to="/dashboard-website/rooftoppers" />
  </Switch>
);

export default App;
