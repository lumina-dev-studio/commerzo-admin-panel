import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface NavBarState {
  sidebarToggle: boolean; // Changed the spelling to be consistent
}

const initialState: NavBarState = {
  sidebarToggle: true,
};

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    // Specify the type of the payload as boolean
    setSideBarToggle: (state, action: PayloadAction<boolean>) => {
      state.sidebarToggle = action.payload; // Assign directly
    },
  },
});

// Export the action creator and the reducer
export const { setSideBarToggle } = navBarSlice.actions;
export default navBarSlice.reducer;
