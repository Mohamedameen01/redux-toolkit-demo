import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async() => {
  const response = await axios.get(PRODUCTS_URL);
  return response.data;
})

const INITIAL_STATE = {
  cartLists:[],
  products:[],
  status:false,
  error:''
};

const cartSlice = createSlice({
  name: "cart", // it must be unique name
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state,action) => {
      const isExistProduct = state.cartLists.find((item) => item.id === action.payload.id)
      
      if (isExistProduct) {
        state.cartLists.forEach((item) => {
          if (item?.id === action.payload.id) {
            item.count = 1
          }
        })
        return;
      }
      state.cartLists.push(
        {
          ...action.payload,
          count:1
        }
      ) 
    },
    incrementCount: (state,action) => {
      const productId = action.payload;
      state.cartLists.forEach((item) => {
        if (item?.id === productId) {
          item.count++
        }
      })
    },
    decrementCount: (state,action) => {
      const productId = action.payload;
      state.cartLists = state.cartLists.filter((item) => {
        if (item?.id === productId) {
          if (item?.count === 1) {
            return false
          }else {
            item.count--
          }
        }
        return true;
      })
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = true
    })
    
    .addCase(fetchProducts.fulfilled, (state,action) => {
      state.status = false
      state.products = action.payload
    })

    .addCase(fetchProducts.rejected, (state,action) => {
      state.status = false
      state.error = action.error.message
    })
  }
});

export const { addToCart, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
