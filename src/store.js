import  { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart-slice"
import categoriesReducer from "./features/categories-slice"
import productReducer from "./features/product-slice"

export const store = configureStore({
    reducer : {
        cart: cartReducer,
        products: productReducer,
        categories: categoriesReducer
    }
})