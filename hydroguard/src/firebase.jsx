// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_dWEUUNMyRtVsxuorloHt8yGGeuMMBEE",
  authDomain: "hydroguard-6801e.firebaseapp.com",
  projectId: "hydroguard-6801e",
  storageBucket: "hydroguard-6801e.appspot.com",
  messagingSenderId: "376810104994",
  appId: "1:376810104994:web:7b7895f869c6127d308ffb",
  measurementId: "G-GEGWXPKZBM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}

