import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header.component';

import HomePage from './Pages/Home/home-page';
import ShopPage from './Pages/Shop/shop-page';
import AuthPage from './Pages/Auth/auth-page';
import { auth } from './config/firebase/firebase.util';
import {createUserProfileDocument} from './config/firebase/firebase.function'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends Component {
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" render={() => this.props.currentUser ? (
            <Redirect to="/" />
          ) : (
            <AuthPage />
          ) }/>
        </Switch>
      </div>
    );
  }
}
 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
