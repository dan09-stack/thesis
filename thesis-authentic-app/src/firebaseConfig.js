import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAo2LrFjx-ufiz4b3TBtRdGxvQbnh-VBZw",
    authDomain: "queue-auth.firebaseapp.com",
    projectId: "queue-auth",
    storageBucket: "queue-auth.appspot.com",
    messagingSenderId: "41111950835",
    appId: "1:41111950835:web:b063108a026a1b184aae86",
    measurementId: "G-5S56JW86PG"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);