import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //state is initial state, action is the data that is coming in from component action dispatch
      state.items.push(action.payload);
      console.log("add", state.items);
      //nothing is returned from reducer function,it just modifies state
    },
    removeItem: (state, action) => {
      console.log("remove", state.items);
      const index = state.items.findIndex((i) => i.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // reducer not reducers as it while combine all functions and create as one reducer
