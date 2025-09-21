import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiMkNaTEFEoiirPskCc66JDVkaU3m_gqg",
  authDomain: "back-word.firebaseapp.com",
  projectId: "back-word",
  storageBucket: "back-word.firebasestorage.app",
  messagingSenderId: "323075811643",
  appId: "1:323075811643:web:d58ff241d87c6dadd9af1e",
  measurementId: "G-NF8H8TM1LX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
