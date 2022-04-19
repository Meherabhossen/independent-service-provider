// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTVPuoxs47CBWzd44BvjnZYLMJzC9Hf44",
  authDomain: "assignment-10-54e41.firebaseapp.com",
  projectId: "assignment-10-54e41",
  storageBucket: "assignment-10-54e41.appspot.com",
  messagingSenderId: "398252423199",
  appId: "1:398252423199:web:e3f6983fac4f00d221fd2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;