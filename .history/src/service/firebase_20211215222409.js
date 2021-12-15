// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDTYojQahsNXW0XLfWXQ4EnExH6-01BZZ4',
  authDomain: 'business-card-maker-82984.firebaseapp.com',
  projectId: 'business-card-maker-82984',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
