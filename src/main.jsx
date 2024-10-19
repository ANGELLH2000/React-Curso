import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "coder-react-8d755.firebaseapp.com",
  projectId: "coder-react-8d755",
  storageBucket: "coder-react-8d755.appspot.com",
  messagingSenderId: "977114759589",
  appId: "1:977114759589:web:2e776c8b784636d11e284c",
  measurementId: "G-B16L7M97T6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const storage = getStorage();
//const analytics = getAnalytics(app);
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
