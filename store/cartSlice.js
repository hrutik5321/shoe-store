import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          // update price if user updated quantity
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }

          // update and return updated product
          return {
            ...p,
            [action.payload.key]: action.payload.val,
          };
        } else {
          return p;
        }
      });
    },

    removefromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateCart, removefromCart } = cartSlice.actions;

export default cartSlice.reducer;
