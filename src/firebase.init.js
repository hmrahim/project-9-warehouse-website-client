// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAug44JzfipNJ5f029vnUKa04efXUuEQ",
  authDomain: "warehouse-c7200.firebaseapp.com",
  projectId: "warehouse-c7200",
  storageBucket: "warehouse-c7200.appspot.com",
  messagingSenderId: "110280311290",
  appId: "1:110280311290:web:c6f7cb8bf9289058ada443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app)

export default auth
