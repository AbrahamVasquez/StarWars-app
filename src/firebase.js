// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAieuJq3WgBP6izGyGdPCPBiWv8_qg0Yqc",
  authDomain: "starwars-app-61f6b.firebaseapp.com",
  projectId: "starwars-app-61f6b",
  storageBucket: "starwars-app-61f6b.appspot.com",
  messagingSenderId: "1023457395625",
  appId: "1:1023457395625:web:005f2a02473e2891c07ab8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { signInWithEmailAndPassword }; 