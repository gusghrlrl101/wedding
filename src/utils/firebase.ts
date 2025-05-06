// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgpSyCfrJWXK1ZDTfW6zegg_Tdu1CRwyU",
  authDomain: "wedding-1f6a8.firebaseapp.com",
  projectId: "wedding-1f6a8",
  storageBucket: "wedding-1f6a8.firebasestorage.app",
  messagingSenderId: "826961366986",
  appId: "1:826961366986:web:961098a40dc0776ff8c933",
  measurementId: "G-B4RVQTGP5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
