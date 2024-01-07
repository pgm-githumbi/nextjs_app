// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();
const debug = require("debug")("firebase/config");

const apiKey = process.env.apiKey;
debug("apikey:", apiKey);
debug("authDomain: ", process.env.authDomain);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6yKZ6TcogxMhDxHdqk9zu2TFG40khSDc",
  authDomain: "next-app-1a930.firebaseapp.com",
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

debug("firebaseConfig: ", firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
