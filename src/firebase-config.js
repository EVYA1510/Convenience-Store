// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqCbgj7RBBhsnjg0hkwSBFLJahrIZeJYc",
  authDomain: "convenience-store-77ca8.firebaseapp.com",
  projectId: "convenience-store-77ca8",
  storageBucket: "convenience-store-77ca8.appspot.com",
  messagingSenderId: "761685776402",
  appId: "1:761685776402:web:9d73184b29c19f619520cb",
  measurementId: "G-M23RX8H1L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
