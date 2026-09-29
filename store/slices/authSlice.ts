import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

type AuthState = {
  user: AuthUser | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});
export const { setAuthUser } = authSlice.actions;
export default authSlice.reducer;
