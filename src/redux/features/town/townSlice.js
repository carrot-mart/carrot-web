import { createSlice } from "@reduxjs/toolkit";

export const townSlice = createSlice({
  name: "town",
  initialState: {
    set: false,
    metCity: "seoul",
    city: "강남구",
    cityArea: "개포동",
  },
  reducers: {
    remove: (state) => {
      state.set = false;
    },
    set: (state, action) => {
      state.set = true;
      state.metCity = action[0];
      state.city = action[1];
      state.cityArea = action[2];
    },
  },
});
