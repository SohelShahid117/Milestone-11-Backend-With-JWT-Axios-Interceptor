// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyBgu1cKKankiH-doGbaAXdxGMw-xuxdN_4",
  authDomain: "car-doctor-2c0b1.firebaseapp.com",
  projectId: "car-doctor-2c0b1",
  storageBucket: "car-doctor-2c0b1.appspot.com",
  messagingSenderId: "90740845219",
  appId: "1:90740845219:web:d94f05fbdb8da122d3ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app