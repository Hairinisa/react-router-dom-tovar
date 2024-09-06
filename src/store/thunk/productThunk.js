import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      console.log("data: ", data);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      dispatch(getAllProduct());

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
