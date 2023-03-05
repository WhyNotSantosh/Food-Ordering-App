import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["Banana", "Apple"]
    },
    reducers: {
        addItem: (state, action) => { //state is initial state, action is the data that is coming in from component action dispatch
            state.items.push(action.payload);
            //nothing is returned from reducer function,it just modifies state
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // reducer not reducers as it while combine all functions and create as one reducer