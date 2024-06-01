import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartLists:[],
  cartCount: 0,
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
});

export const { addToCart, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
