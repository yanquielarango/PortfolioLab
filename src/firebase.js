import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsbEJn7Q3U4sRuaHibFSg-wOX0u_nQirQ",
  authDomain: "portfoliolab-65abc.firebaseapp.com",
  projectId: "portfoliolab-65abc",
  storageBucket: "portfoliolab-65abc.appspot.com",
  messagingSenderId: "1049806170807",
  appId: "1:1049806170807:web:335b9f6c0d7adc8f437b32",
  measurementId: "G-P2X3N6JCBF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);
