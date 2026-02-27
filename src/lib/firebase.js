// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 1. Added this import

const firebaseConfig = {
  apiKey: "AIzaSyC4OY2kfluiMHpBbLWdhI4ZfY43llMmm8o",
  authDomain: "clone-9b949.firebaseapp.com",
  databaseURL: "https://clone-9b949.firebaseio.com",
  projectId: "clone-9b949",
  storageBucket: "clone-9b949.firebasestorage.app",
  messagingSenderId: "1014194742044",
  appId: "1:1014194742044:web:5e1a9a4a60ac1032f8d0d9",
  measurementId: "G-D40K3VRT89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize and EXPORT the services so they are available in your app
export const auth = getAuth(app); 
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;