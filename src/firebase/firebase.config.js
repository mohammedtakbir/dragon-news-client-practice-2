// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAETfoJMmXnzNlVaWqgqLB0XW9s_-KR9Aw",
  authDomain: "dragon-news-web-app.firebaseapp.com",
  projectId: "dragon-news-web-app",
  storageBucket: "dragon-news-web-app.appspot.com",
  messagingSenderId: "74487828770",
  appId: "1:74487828770:web:ea5432a8295e4e25b0557b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

//* firebase project name---> dragon-news-web-app
//* project link---> https://console.firebase.google.com/u/0/project/dragon-news-web-app/overview