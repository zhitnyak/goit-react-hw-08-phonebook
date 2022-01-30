// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4oxZMTUsPwYiVM3PdRVVoOglJ0FNHqmQ",
  authDomain: "autorization-project-fs37-08.firebaseapp.com",
  projectId: "autorization-project-fs37-08",
  storageBucket: "autorization-project-fs37-08.appspot.com",
  messagingSenderId: "684077096235",
  appId: "1:684077096235:web:3e0ae8f2b5ae72e2c5796e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export const app = { GoogleAuthProvider, signInWithPopup, auth };
