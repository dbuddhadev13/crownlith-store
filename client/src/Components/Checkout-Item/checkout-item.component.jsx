import React from 'react';

import './checkout-item.style.scss'
import { clearItem, addItem, reduceItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearItem, addItem, reduceItem }) => {
    const {name, quantity, price, imageUrl} = cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item"/>
            </div>
            <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => (reduceItem(cartItem))}>
                        <i className="gg-chevron-left"></i>
                    </div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => (addItem(cartItem))}>
                        <i className="gg-chevron-right"></i>
                    </div>
                </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={() => (clearItem(cartItem))}>
                    <i className="gg-close-o"></i>
                </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);