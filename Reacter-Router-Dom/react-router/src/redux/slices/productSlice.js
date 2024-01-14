import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// async function getData() {

// }

export const fetchData = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    return await response.json();
    // const data = await respose.json();
    // const dispatch = useDispatch();
    // dispatch(loadProducts(data));
})

const productSlice = createSlice({

    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'success';
        }).addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
})

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;