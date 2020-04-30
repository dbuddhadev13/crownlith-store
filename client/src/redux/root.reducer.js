import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer.js"
import CartReducer from "./cart/cart.reducer.js";
import DirectoryReducer from "./directory/directory.reducer.js";
import { ShopReducer } from "./shop/shop.reducer.js";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'cart'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
})

export default persistReducer(persistConfig, rootReducer)