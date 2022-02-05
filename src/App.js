import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fbase from "./fbase";
import { setUser } from "./redux/actions/user_action";

function App() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    fbase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      if (user) {
        // 로그인이 된 상태
        navigate("/");
        dispatch(setUser(user));
      } else {
        // 로그인이 안 된 상태
        navigate("/login");
      }
    });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <>
        {/* <Link to="/town">TownPage</Link> */}
        <Link to="/login">Login</Link>
        {/* <Link to="/mypage/sellbuyrecord">SellBuyRecord</Link> */}
        {/* <Link to="/mypage/region">SelectRegion</Link> */}
        <Link to="/register">Register</Link>
        <Link to="/test">Testpage</Link>
        <Link to="/mypage/faq">FAQ</Link>
      </>
    );
  }
}
export default App;
