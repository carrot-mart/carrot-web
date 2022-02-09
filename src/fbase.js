import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { findByPlaceholderText } from "@testing-library/react";

const firebaseConfig = {
  apiKey: "AIzaSyDzGnhAWWP9oac-Mnay0VvSrscYZ-FyIfA",
  authDomain: "react-firebase-app-1faf4.firebaseapp.com",
  databaseURL: "https://react-firebase-app-1faf4-default-rtdb.firebaseio.com",
  projectId: "react-firebase-app-1faf4",
  storageBucket: "react-firebase-app-1faf4.appspot.com",
  messagingSenderId: "181629495403",
  appId: "1:181629495403:web:a796db5dd9c52004eb692e",
};

firebase.initializeApp(firebaseConfig);
const SocialLogin = initializeApp(firebaseConfig);
export const authentication = getAuth(SocialLogin);

export const firebaseInstance = firebase;
export const authService = getAuth();

export default firebase;
