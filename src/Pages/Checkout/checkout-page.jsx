import React from 'react'

import './checkout-page.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../Components/Checkout-Item/checkout-item.component';
import StripeButton from '../../Components/Stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
            )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="card-info">
            *Please use the following test credit card for the payment
            <br/>
            Card Number : 4242 4242 4242 4242 -- Exp : {new Date().getMonth() + 2}/20 -- CVV : 123
        </div>
        <StripeButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);