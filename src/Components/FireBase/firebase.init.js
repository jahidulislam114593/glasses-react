import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9a9yaTJUhKXkN-T8yzQLGePkJlMJ9Wa0",
  authDomain: "glasses-auth-39338.firebaseapp.com",
  projectId: "glasses-auth-39338",
  storageBucket: "glasses-auth-39338.appspot.com",
  messagingSenderId: "38815037701",
  appId: "1:38815037701:web:a9951c438d405e02e85f6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
