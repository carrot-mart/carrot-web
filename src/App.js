import logo from "./logo.svg";

import "./globalStyles.css";
import TownMainPage from "./pages/TownPage";
import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
import { Link } from "react-router-dom";
import SearchResultPage from "./pages/MainPage/SearchResultPage";
import MainPage from "./pages/MainPage/MainPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
