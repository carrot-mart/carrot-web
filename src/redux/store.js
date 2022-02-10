import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./features/likes/likesSlice";
import loginReducer from "./features/login/loginSlice";

export default configureStore({
  reducer: { likes: likesReducer, login: loginReducer },
});
