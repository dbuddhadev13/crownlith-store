import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer.js"
import CartReducer from "./cart/cart.reducer.js";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'cart'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})

export default persistReducer(persistConfig, rootReducer)