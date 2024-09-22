import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "default",
  price: 0,
  quantity: 0,
  company: "default",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeProductName: (state, action) => {
      state.name = action.payload;
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
    changequantity: (state, action) => {
      state.quantity = action.payload;
    },
    changeCompany: (state, action) => {
      state.company = action.payload;
    },
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
});

// Action creators are generated for each case reducer function
export const { changeProductName, changePrice, changequantity, changeCompany } =
  productSlice.actions;

export default productSlice.reducer;
