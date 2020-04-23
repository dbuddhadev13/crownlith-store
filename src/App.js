import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
