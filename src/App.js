import "./globalStyles.css";
import TownMainPage from "./pages/TownPage";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/user_action";
import fbase from "./fbase";

import MainPage from "./pages/MainPage/MainPage";
import Talk from "./components/Talk2";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Bottom from "./components/Bottom";
import TestLoginAfterMain from "./components/LoginPage/TestLoginAfterMain";

function App() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    fbase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      if (user) {
        navigate("/main");
        dispatch(setUser(user));
      } else {
        navigate("/main");
      }
    });
  }, []);

  if (isLoading) {
    return <div>....loading</div>;
  } else {
    return (
      <div className="App">
        <TestLoginAfterMain />
        <Navigation />
        <TownMainPage />
        <Link to="/main">Main</Link>
        {/* <Link to="/town">TownPage</Link> */}
        <Link to="/login">Login</Link>
        {/* <Link to="/mypage/sellbuyrecord">SellBuyRecord</Link> */}
        {/* <Link to="/mypage/region">SelectRegion</Link> */}
        <Link to="/register">Register</Link>
        <Link to="/talk">talk</Link>
        <Link to="/mypage/faq">FAQ</Link>
        <Bottom />
      </div>
    );
  }
}

export default App;
