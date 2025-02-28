import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBM33Xzi0fB5tdmeS2F0A5tPp7QReGqTc",
  authDomain: "clone-5d6af.firebaseapp.com",
  projectId: "clone-5d6af",
  storageBucket: "clone-5d6af.firebasestorage.app",
  messagingSenderId: "1046650343867",
  appId: "1:1046650343867:web:15ecfb88026e8db3a6749e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
