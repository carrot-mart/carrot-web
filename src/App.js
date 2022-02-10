import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
import MainPagePopularDetail from './pages/MainPage/SearchResultPage';

function App() {
  return (
    MainPagePopularDetail()
=======

import "./globalStyles.css";
import TownMainPage from "./pages/TownPage";
import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
import { Link } from "react-router-dom";
import SearchResultPage from "./pages/MainPage/SearchResultPage";
import RegionSettingsPage from './pages/MyPage/RegionSetttingsPage';

function App() {
  return (
    <div className="App">
      <Link to="/mypage/likerecord">Like Record</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecird</Link>
      <RegionSettingsPage />
    </div>
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
  );
}

export default App;
