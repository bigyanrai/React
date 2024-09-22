import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "bigyan",
  age: 22,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAge: (state, action) => {
      state.age = action.payload;
    },
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
});

// Action creators are generated for each case reducer function
export const { changeName, changeAge } = infoSlice.actions;

export default infoSlice.reducer;
