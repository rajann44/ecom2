import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcfy2VPi66GZshJG6Rwol_bAK6w-WLMgY",
  authDomain: "ecom2-c9e3e.firebaseapp.com",
  projectId: "ecom2-c9e3e",
  storageBucket: "ecom2-c9e3e.appspot.com",
  messagingSenderId: "217965027235",
  appId: "1:217965027235:web:cfcb477f144da153c2c416",
};

const app = initializeApp(firebaseConfig);

//Exporting for usage across project
export const db = getFirestore(app);
export const productsReference = collection(db, "products");
export const auth = getAuth(app);
export default app;
