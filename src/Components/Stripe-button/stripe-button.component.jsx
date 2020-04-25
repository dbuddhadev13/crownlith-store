import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_j4heub1l4BZjoLFWatTA1aCR00cv2Ive4p"

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crown Store"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is ${price}.00`}
            amount= {priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;