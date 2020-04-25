import React from 'react'

import './cart-icon.style.scss'

import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.action'
import { selectCartQuantity } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <i class="gg-shopping-bag shopping-icon"></i>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})  

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartQuantity
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);