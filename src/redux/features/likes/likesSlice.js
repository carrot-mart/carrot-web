import { createSlice } from "@reduxjs/toolkit";

export const likesSlice = createSlice({
  name: "likes",
  initialState: [],
  reducers: {
    like: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ product }) => ({
        payload: product,
      }),
    },
    unlike: {
      reducer: (state, action) => {
        state = state.filter((element) => element.id !== action.payload.id);
      },
      prepare: ({ product }) => ({
        payload: product,
      }),
    },
  },
});

export const { like, unlike } = likesSlice.actions;
export default likesSlice.reducer;
