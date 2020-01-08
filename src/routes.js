import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:page?" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
