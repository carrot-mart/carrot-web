import React from 'react';
import ReactDOM from 'react-dom';
import "./globalStyles.css";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from "./App";
//import SellBuyRecordPage from "./pages/MyPage/SellBuyRecordPage";
//import RegionSettingsPage from "./pages/MyPage/RegionSetttingsPage";
//import LikeRecordPage from "./pages/MyPage/LikeRecordPage";
//import SearchResultPage from "./pages/MainPage/SearchResultPage";
//import TownStoreDetailPage from "./pages/TownStoreDetailPage";
import TownMainPage from "./pages/TownPage";
import LoginPage from "./pages/LoginPage";
import MyPost from "./components/MyPost";
// import FAQPage from "./pages/MyPage/FAQPage";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/town" element={<TownMainPage />} />
          <Route path="/mypost" element={<MyPost />} />
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
serviceWorker.unregister();