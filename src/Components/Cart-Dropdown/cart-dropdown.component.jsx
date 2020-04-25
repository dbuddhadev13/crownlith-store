import React from 'react'

import './cart-dropdown.style.scss';
import CustomButton from '../Custom-Button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-Item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);