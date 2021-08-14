import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/'/>
    </Switch>
  </Router>
);
