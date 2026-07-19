import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";
// import cartReducer from "../features/cart/cartSlice";
// import checkoutReducer from "../features/checkout/checkoutSlice";
// import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        // cart: cartReducer,
        // checkout: checkoutReducer,
        // order: orderReducer,
    },
});