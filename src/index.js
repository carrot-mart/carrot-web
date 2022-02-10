import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import SellBuyRecordPage from "./pages/MyPage/SellBuyRecordPage";
import RegionSettingsPage from "./pages/MyPage/RegionSetttingsPage";
import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
import SearchResultPage from "./pages/MainPage/SearchResultPage";
import TownMainPage from "./pages/TownPage";
import LoginPage from "./pages/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/town" element={<TownMainPage />} />
          <Route path="/mypage/likerecord" element={<LikeRecordPage />} />
          <Route path="/mypage/region" element={<RegionSettingsPage />} />
          <Route path="/mypage/sellbuyrecord" element={<SellBuyRecordPage />} />
          <Route
            path="/mypage/regionsettings"
            element={<RegionSettingsPage />}
          />
          <Route path="/product/:id" element={<SearchResultPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
