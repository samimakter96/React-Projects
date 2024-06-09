
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyDoSPD95WT0If_12atc8PJsk1FDHw9WVdg',
  authDomain: 'expense-tracker-3be2d.firebaseapp.com',
  projectId: 'expense-tracker-3be2d',
  storageBucket: 'expense-tracker-3be2d.appspot.com',
  messagingSenderId: '1070161844492',
  appId: '1:1070161844492:web:5c0fef83b87efc54b01129',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)

// firebase login
// firebase init
// firebase deploy
