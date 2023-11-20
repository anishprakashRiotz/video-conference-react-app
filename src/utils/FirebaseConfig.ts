// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-kX67GN7d2s_lN_nky_wXVikOHdio6-0",
  authDomain: "aicte-meet-75870.firebaseapp.com",
  projectId: "aicte-meet-75870",
  storageBucket: "aicte-meet-75870.appspot.com",
  messagingSenderId: "737761949284",
  appId: "1:737761949284:web:98447e576f3bb3ce5b9171",
  measurementId: "G-1C78HFCN91"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");