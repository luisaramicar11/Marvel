import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAurmZt7oFcwOAbpB1H-urN0ZKApX2bjdc",
  authDomain: "e-commerce-marvel.firebaseapp.com",
  projectId: "e-commerce-marvel",
  storageBucket: "e-commerce-marvel.appspot.com",
  messagingSenderId: "864654885522",
  appId: "1:864654885522:web:e1e09f72e37d51da5c5c4b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
