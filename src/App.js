import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header.component';

import HomePage from './Pages/Home/home-page';
import ShopPage from './Pages/Shop/shop-page';
import AuthPage from './Pages/Auth/auth-page';
import { auth } from './config/firebase/firebase.util';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
