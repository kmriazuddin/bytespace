import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  mobileMenuOpen: boolean;
  selectedCategory: string;
};

const initialState: UIState = {
  mobileMenuOpen: false,
  selectedCategory: "Featured",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setMobileMenuOpen, setSelectedCategory } = uiSlice.actions;
export default uiSlice.reducer;
