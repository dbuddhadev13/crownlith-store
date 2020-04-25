import { cartActionTypes } from "./cart.type";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;