import { createSlice } from "@reduxjs/toolkit";

const Cartslices = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increment:(state,action)=>{
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
    },

    decrement:(state,action)=>{
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        );
    }
  },
});

export const { addtocart, removefromcart, increment,decrement } = Cartslices.actions;
export default Cartslices.reducer;

