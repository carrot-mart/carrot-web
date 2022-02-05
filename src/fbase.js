import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { findByPlaceholderText } from "@testing-library/react";

const firebaseConfig = {
  apiKey: "AIzaSyB1E4b8RcpusOtY5fTpmN5n8TStVcbU8bs",
  authDomain: "carrot-3086e.firebaseapp.com",
  projectId: "carrot-3086e",
  storageBucket: "carrot-3086e.appspot.com",
  messagingSenderId: "761166877177",
  appId: "1:761166877177:web:4531687ba1995ad24aed28",
};
firebase.initializeApp(firebaseConfig);
const SocialLogin = initializeApp(firebaseConfig);
// const storage = getStorage(SocialLogin);
export const authentication = getAuth(SocialLogin);

export const firebaseInstance = firebase;
export const authService = getAuth();

export default firebase;
