import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface AddProductState {
  productSize: string[]; // Change the type based on your actual state
  imageArray: string[]; // Change the type based on your actual state
}

const initialState: AddProductState = {
  productSize: [],
  imageArray:[]
};

const setAddProduct = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    // Specify the type of the payload
    setProductSize: (state, action: PayloadAction<string[]>) => {
      state.productSize = action.payload; // Assign directly if payload is already an array
    },
    setImageArray: (state, action: PayloadAction<string[]>) => {
      state.productSize = action.payload; // Assign directly if payload is already an array
    },
  },
});

// Export the action creator and the reducer
export const { setProductSize,setImageArray } = setAddProduct.actions;
export default setAddProduct.reducer;
