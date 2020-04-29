import React, { useEffect } from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header.component';

import HomePage from './Pages/Home/home-page';
import ShopPage from './Pages/Shop/shop-page';
import AuthPage from './Pages/Auth/auth-page';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './Pages/Checkout/checkout-page';


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth" render={() => currentUser ? (
          <Redirect to="/" />
        ) : (
          <AuthPage />
        ) }/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
