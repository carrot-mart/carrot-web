import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    product: {},
    store: {},
  },
  reducers: {
    showProductDetail: {
      reducer: (state, action) => {
        return {
          product: action.payload,
          store: state.store,
        };
      },
      prepare: ({ product }) => ({
        payload: product,
      }),
    },
    showStoreDetail: {
      reducer: (state, action) => {
        return {
          product: state.product,
          store: action.payload,
        };
      },
      prepare: ({ store }) => ({
        payload: store,
      }),
    },
  },
});

export const { showProductDetail, showStoreDetail } = detailSlice.actions;
export default detailSlice.reducer;
