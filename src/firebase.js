// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK_i6Xb-p9rmHfZYs__FRDV16sERItstM",
  authDomain: "hw-week4.firebaseapp.com",
  projectId: "hw-week4",
  storageBucket: "hw-week4.appspot.com",
  messagingSenderId: "571465821528",
  appId: "1:571465821528:web:aa119e72b93814b90f492d",
  measurementId: "G-Z8GLPQDYP9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
