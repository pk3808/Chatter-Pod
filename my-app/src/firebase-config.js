// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9UC6wFqD-eZdnohvQ1N92tVJi6kvZ9Jc",
  authDomain: "chat-first-23.firebaseapp.com",
  projectId: "chat-first-23",
  storageBucket: "chat-first-23.appspot.com",
  messagingSenderId: "773378097076",
  appId: "1:773378097076:web:68376ff08e6e00df677ce1",
  measurementId: "G-F2ZTPX0S7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
export { app, storage };
export const provider = new GoogleAuthProvider();
