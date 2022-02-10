import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    login: {
      reducer: (state, action) => {
        return { value: true };
      },
    },
    logout: {
      reducer: (state, action) => {
        return { value: false };
      },
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
