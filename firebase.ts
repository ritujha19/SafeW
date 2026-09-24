 
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrB4w0easeQcd3lBl-lLpu787KCxgVU7c",
  authDomain: "safew-173c0.firebaseapp.com",
  projectId: "safew-173c0",
  storageBucket: "safew-173c0.firebasestorage.app",
  messagingSenderId: "1002685022635",
  appId: "1:1002685022635:web:7326e010b4a517fee9d2ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);