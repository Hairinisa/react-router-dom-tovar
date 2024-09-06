import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../thunk/productThunk";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    tovar: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.tovar = action.payload;
    });
  },
});

export const {} = productSlice.actions;
export const productReducer = productSlice.reducer;
