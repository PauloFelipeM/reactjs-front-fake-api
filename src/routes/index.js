import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Phones from '../pages/Phones';
import New from '../pages/Phones/New';
import Edit from '../pages/Phones/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Phones} />
      <Route path="/new" component={New} />
      <Route path="/:id" component={Edit} />
    </Switch>
  );
}
