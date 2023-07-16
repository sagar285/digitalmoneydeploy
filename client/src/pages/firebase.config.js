// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH8BF9_YLXcKyQZNO4Zv2GDfSB2KdH4Ks",
  authDomain: "otp-project-c79c1.firebaseapp.com",
  projectId: "otp-project-c79c1",
  storageBucket: "otp-project-c79c1.appspot.com",
  messagingSenderId: "401425233213",
  appId: "1:401425233213:web:5e241ed7a61985fade0154",
  measurementId: "G-0KPW24KZ5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);