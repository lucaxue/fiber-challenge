import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';

export const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' />
      <Route path='/features' />
      <Route path='/pricing' />
      <Route path='/community' />
      <Route path='/' component={Home} />
    </Switch>
  </Router>
);
