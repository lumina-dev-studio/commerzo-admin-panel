import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface NavBarState {
  dropDownMenuToggle: string; // Changed the spelling to be consistent
}

const initialState: NavBarState = {
    dropDownMenuToggle: "Dashboard",
};

const sideBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    // Specify the type of the payload as boolean
    setDropDownMenuToggle: (state, action: PayloadAction<string>) => {
      state.dropDownMenuToggle = action.payload; // Assign directly
    },
  },
});

// Export the action creator and the reducer
export const { setDropDownMenuToggle } = sideBarSlice.actions;
export default sideBarSlice.reducer;
