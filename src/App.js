import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./globalStyles.css";
import MyPostPage from "./pages/MyPage/MyPostPage";
import PostProductPage from "./pages/PostProductPage/PostProductPage";
import Modal from "./components/Modal";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";
import { MainPanel } from "./components/ChatPage/MainPanel/MainPanel";


function App(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        dispatch(setUser(user));

        const uid = user.uid;

      } else {
        navigate("/login");
        dispatch(clearUser());

      }
    });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
  return (
    <>
      <MyPostPage />
    </>
  );
}
}

export default App;
