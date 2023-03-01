// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt25t9CPbPZ7V5l2S8JqeRB4BHB4DEWj4",
  authDomain: "jesttestcase.firebaseapp.com",
  projectId: "jesttestcase",
  storageBucket: "jesttestcase.appspot.com",
  messagingSenderId: "702241300179",
  appId: "1:702241300179:web:0d2f330961b277f6177e26",
  measurementId: "G-5WQ3VCTXK9",
  databaseURL: "https://jesttestcase.firebaseio.com/"
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
