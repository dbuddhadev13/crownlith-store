import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/cart.svg"

import './cart-icon.style.scss'

import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.action'

const CartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = ({ cart: { cartItems }}) => ({
    itemCount: cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);