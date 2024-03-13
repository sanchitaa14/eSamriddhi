// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import for Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpiUd_mkBdzwuIR_4jZswolk4vHdh1l0",
  authDomain: "esamriddhi-71025.firebaseapp.com",
  projectId: "esamriddhi-71025",
  storageBucket: "esamriddhi-71025.appspot.com",
  messagingSenderId: "851231951495",
  appId: "1:851231951495:web:9347628336b08e2c7ac622",
  measurementId: "G-48XHBXKSH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, analytics, auth, firestore, storage }; // Exporting all initialized Firebase objects
