import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },


    decrement: (state) => {
      state.value -= 1;
    },


    increaseByAmount: (state, action) => {
      let { payload } = action;
      
      // convert string to number type
      payload = Number(payload);

      state.value += payload;
    },
  },
});

// actions creator function
export const { increment, decrement, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
