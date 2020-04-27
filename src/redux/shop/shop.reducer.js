import ShopActionTypes from "./shop.type";

const INITIAL_STATE= {
   collections: null
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS: 
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}