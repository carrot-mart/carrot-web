import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';
import {
  BrowserRouter , Router, Route, Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals.js";

import App from './App';
import TownPage from './pages/TownPage';
//import LoginPage from './components/LoginPage/LoginPage';
import LoginPage from './pages/LoginPage';
import MyPostPage from './pages/MyPage/MyPostPage';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <BrowserRouter>
      <Routes >
          <Route path="/" element={<App />} />
          <Route path="/town" element={<TownPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/postpage" element={<MyPostPage />} />
          {/* <Route path="/mypage/sellbuyrecord" element={<SellBuyRecordPage />} />
          <Route path="/mypage/region" element={<SelectRegion />} />
          <Route path="/sign" element={<SignPage />} /> */}
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
