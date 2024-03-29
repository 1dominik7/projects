import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id && item.size === action.payload.size);
      if (item ) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>( item.id !== action.payload && item.size !== action.payload))
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;