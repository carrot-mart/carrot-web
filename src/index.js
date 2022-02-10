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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
