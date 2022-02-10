import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { setUser, clearUser } from "./redux/actions/user_action";
import { MainPanel } from "./components/ChatPage/MainPanel/MainPanel";
import "./globalStyles.css";
import SearchResultPage from "./pages/MainPage/SearchResultPage";
import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import MyPostPage from "./pages/MyPage/MyPostPage";
import PostProductPage from "./pages/PostProductPage/PostProductPage";
import TownPage from "./pages/TownPage";
import MainPage from "./pages/MainPage/MainPage";
import Modal from "./components/Modal";
import TestLoginAfterMain from "./components/LoginPage/TestLoginAfterMain";
import LoginPage from "./pages/LoginPage";





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
    <div className="App">
      <LoginPage />
      {/* <Link to="/mypage/likerecord">Like Record</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecird</Link> */}
  
      
    </div>
  );
}
}

export default App;
