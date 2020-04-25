import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.style.scss';

import { auth } from '../../config/firebase/firebase.util';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;