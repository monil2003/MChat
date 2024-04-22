// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUNY_oylRQx9XUb6U4m0gbnHFnU_zTZG4",
  authDomain: "masterchat-882bd.firebaseapp.com",
  projectId: "masterchat-882bd",
  storageBucket: "masterchat-882bd.appspot.com",
  messagingSenderId: "915755420481",
  appId: "1:915755420481:web:c8dac152960236b70e2fc0",
  measurementId: "G-L07PSG5E9D"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth , provider, db };