import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header.component';

import HomePage from './Pages/Home/home-page';
import ShopPage from './Pages/Shop/shop-page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
