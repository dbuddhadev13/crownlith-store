import { cartActionTypes } from "./cart.type";

export const toggleCart = () => ({
    type: cartActionTypes.TOGGLE_CART,
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: cartActionTypes.CLEAR_ITEM,
    payload: item
})

export const reduceItem = item => ({
    type: cartActionTypes.REDUCE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})