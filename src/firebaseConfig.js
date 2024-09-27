// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmn_6ZHnRLFnUKxolxTaI2j1OGQiVzjCk",
  authDomain: "realestate-436c4.firebaseapp.com",
  projectId: "realestate-436c4",
  storageBucket: "realestate-436c4.appspot.com",
  messagingSenderId: "414380067660",
  appId: "1:414380067660:web:abc8c3559df8ef3f311de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
