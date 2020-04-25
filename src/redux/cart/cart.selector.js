import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)