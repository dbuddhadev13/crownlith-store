import ShopActionTypes from "./shop.type";

const INITIAL_STATE= {
   collections: null,
   isFetching: false,
   errorMessage: undefined
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLETIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLETIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_COLLETIONS_FAILURE: 
            return {
                ...state,
                isFetching: false,
                errorMessage    : action.payload
            }
        default:
            return state;
    }
}