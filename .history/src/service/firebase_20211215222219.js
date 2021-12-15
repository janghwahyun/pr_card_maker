// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTYojQahsNXW0XLfWXQ4EnExH6-01BZZ4',
  authDomain: 'business-card-maker-82984.firebaseapp.com',
  projectId: 'business-card-maker-82984',
  storageBucket: 'business-card-maker-82984.appspot.com',
  messagingSenderId: '1034851167482',
  appId: '1:1034851167482:web:efdcd02a15537b2b19ad43',
  measurementId: 'G-W2TXJQL40Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
