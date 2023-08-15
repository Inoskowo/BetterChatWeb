// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcWKTKdaKgpSy8t-_rAX4sKkorG0KgCXM",
  authDomain: "betterchatbd.firebaseapp.com",
  databaseURL: "https://betterchatbd-default-rtdb.firebaseio.com",
  projectId: "betterchatbd",
  storageBucket: "betterchatbd.appspot.com",
  messagingSenderId: "231936940829",
  appId: "1:231936940829:web:97a7f94da4b4f709825ff4",
  measurementId: "G-2GPSRY9KXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };