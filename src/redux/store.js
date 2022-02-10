import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./features/likes/likesSlice";

export default configureStore({ reducer: { likes: likesReducer } });
