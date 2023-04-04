// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBuvKlwLTTrtRzcVWb8gOR-kJ_Akda-9M",
  authDomain: "farmeet--app.firebaseapp.com",
  projectId: "farmeet--app",
  storageBucket: "farmeet--app.appspot.com",
  messagingSenderId: "609183171364",
  appId: "1:609183171364:web:19ab3d14a74e933914a9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)