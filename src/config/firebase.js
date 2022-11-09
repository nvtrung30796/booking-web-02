// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_nsViOzT2UfkXZeNruNHomfGTl_C6XAM",
//   authDomain: "reactadvanced-8f9c3.firebaseapp.com",
//   databaseURL: "https://reactadvanced-8f9c3-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reactadvanced-8f9c3",
//   storageBucket: "reactadvanced-8f9c3.appspot.com",
//   messagingSenderId: "43368417982",
//   appId: "1:43368417982:web:2d9d6f6e5b6f6300d2ecef",
//   measurementId: "G-KRVDYV1G5B"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBycHI12ArQCRRYsTqI75_RW6swfmBATZ0",
  authDomain: "booking-web-app-bb94e.firebaseapp.com",
  projectId: "booking-web-app-bb94e",
  storageBucket: "booking-web-app-bb94e.appspot.com",
  messagingSenderId: "99929947171",
  appId: "1:99929947171:web:c62e3a04613a52ae7fc596",
  measurementId: "G-N2SECRMRTM"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const analytics = getAnalytics(app);

const auth = getAuth()
const db = getFirestore(app);
const provider = new FacebookAuthProvider();
const providerGG = new GoogleAuthProvider()
export function signup(email,password) {
  return createUserWithEmailAndPassword(auth,email,password)
}

export function signin(email,password) {
  return signInWithEmailAndPassword(auth,email,password)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() =>{
    const unsub =  onAuthStateChanged(auth,user => setCurrentUser(user));
    return unsub;
  },[])

  return currentUser
}

//Logout
export function logout() {
  return signOut(auth)
}

export {db, auth, provider, providerGG, database}
