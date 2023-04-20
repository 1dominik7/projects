import { createSlice } from "@reduxjs/toolkit";
import { storeUser } from "./store";

const initialState = {
  favProducts: localStorage.getItem('favProducts') ? JSON.parse(localStorage.getItem('favProducts')): [],
};

export const cartSliceFav = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      // const item = state.favProducts.find((item) => item.id === action.payload.id);
      // if (!item) {
      //   state.favProducts.push(action.payload)
      // } else {
      //   state.favProducts.slice(0,action.payload)
      // }
      let existItemIndex = state.favProducts.findIndex(item => item.id === action.payload.id)

      if (existItemIndex >= 0) {
        alert('This product already exists in your wishlist')
      } else {
        let favListItem = { ...action.payload }
      
      state.favProducts.push(favListItem)

      localStorage.setItem('favProducts', JSON.stringify(state.favProducts))
      }


    },
    removeItemFav: (state, action) => {
      state.favProducts = state.favProducts.filter(item=>( item.id !== action.payload))
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addToFav,removeItemFav} = cartSliceFav.actions;

export default cartSliceFav.reducer;