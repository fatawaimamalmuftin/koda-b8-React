import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";
import storage from "./storage";
import { persistReducer, persistStore } from "redux-persist";

// import cartReducer from "../features/cart/cartSlice";
// import checkoutReducer from "../features/checkout/checkoutSlice";
// import orderReducer from "../features/order/orderSlice";

const persistConfigUser = {
    key:"user",
    storage
}

const persistConfigProduct = {
    key:"product",
    storage
}

const userPersisReducer = persistReducer(persistConfigUser,userReducer)
const productPersisReducer = persistReducer(persistConfigProduct,productReducer)

export const store = configureStore({
    reducer: {
        product: productPersisReducer,
        user: userPersisReducer,
        // cart: cartReducer,
        // checkout: checkoutReducer,
        // order: orderReducer,
    },

    middleware: (getDefaultMiddlewere) =>
        getDefaultMiddlewere({
            serializableCheck: false
        })
});

export const persistor = persistStore(store)