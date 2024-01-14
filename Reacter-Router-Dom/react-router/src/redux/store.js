import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slices/productSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
})