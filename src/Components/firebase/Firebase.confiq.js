// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoEudhif0FTKq8ovqQAlsfTEI9DFnkqO0",
  authDomain: "simple-project-1-65744.firebaseapp.com",
  projectId: "simple-project-1-65744",
  storageBucket: "simple-project-1-65744.appspot.com",
  messagingSenderId: "39666043341",
  appId: "1:39666043341:web:d192e489939a2850865c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;