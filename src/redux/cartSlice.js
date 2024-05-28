import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart", // it must be unique name
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state) => {
      if (state.cartCount === 0) {
        state.cartCount = 1;
      }
    },
    incrementCount: (state) => {
      if (state.cartCount >= 0) {
        state.cartCount += 1;
      }
    },
    decrementCount: (state) => {
      if (!state.cartCount <= 0) {
        state.cartCount -= 1;
      }
    },
  },
});

export const { addToCart, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
