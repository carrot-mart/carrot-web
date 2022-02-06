import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import SellBuyRecordPage from "./pages/MyPage/SellBuyRecordPage";
import RegionSettingsPage from "./pages/MyPage/RegionSetttingsPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mypage/sellbuyrecord" element={<SellBuyRecordPage />} />
        <Route path="/mypage/region" element={<RegionSettingsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
