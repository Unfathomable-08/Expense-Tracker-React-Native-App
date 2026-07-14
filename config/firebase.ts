// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgJZbovGS8_CSgz56gse2kpl9ocmf-yq4",
  authDomain: "expense-tracker-f32ed.firebaseapp.com",
  projectId: "expense-tracker-f32ed",
  storageBucket: "expense-tracker-f32ed.firebasestorage.app",
  messagingSenderId: "541125533718",
  appId: "1:541125533718:web:0b2891e5e5d265a2cbd537",
  measurementId: "G-NSXTZH6KM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// Initialize Firebase Storage
export const firestore = getFirestore(app);