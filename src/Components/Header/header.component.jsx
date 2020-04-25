import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.style.scss';

import { auth } from '../../config/firebase/firebase.util';
import { connect } from 'react-redux';

import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/contact" >CONTACT</Link>
            {
                currentUser
                ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);