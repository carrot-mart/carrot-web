import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const firebaseInstance = firebase;
export const authService = getAuth();

export default firebase;
