import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.style.scss';

import { connect } from 'react-redux';

import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/contact" >CONTACT</Link>
            {
                currentUser
                ? <div className="option" onClick={signOutStart}>SIGN OUT</div>
                : <Link className="option" to="/auth">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden
            ? null
            : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);