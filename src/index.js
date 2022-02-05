import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./redux/reducers";

import TestLoginAfterMain from "./components/LoginPage/TestLoginAfterMain";
// import TownPage from "./pages/TownPage";
import LoginPage from "./pages/LoginPage";
// import SellBuyRecordPage from "./pages/MyPage/SellBuyRecordPage";
// import SelectRegion from "./components/MyPage/SelectRegion/SelectRegion";
import RegisterPage from "./pages/RegisterPage";
import FAQPage from "./pages/MyPage/FAQPage";
import App from "./App";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/town" element={<TownPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/mypage/sellbuyrecord" element={<SellBuyRecordPage />} /> */}
          {/* <Route path="/mypage/region" element={<SelectRegion />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/test" element={<TestLoginAfterMain />} />
          <Route path="/mypage/faq" element={<FAQPage />} />
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
