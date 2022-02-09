import logo from './logo.svg';

import "./globalStyles.css";
import TownMainPage from "./pages/TownPage";
import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
import { Link } from "react-router-dom";
import SearchResultPage from "./pages/MainPage/SearchResultPage";

function App() {
  return (
    <div className="App">
      <Link to="/mypage/likerecord">Like Record</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecird</Link>
      <SearchResultPage />
    </div>
  );
}

export default App;
