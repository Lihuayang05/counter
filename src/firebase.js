// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyAOqXZheudgUHARqtX5rdISwot0YDObPVE",
  authDomain: "txy-counter.firebaseapp.com",
  databaseURL: "https://txy-counter-default-rtdb.firebaseio.com",  // Add Realtime Database URL
  projectId: "txy-counter",
  storageBucket: "txy-counter.appspot.com",
  messagingSenderId: "490843106662",
  appId: "1:490843106662:web:d1c12232fbb270e9716ca7",
  measurementId: "G-RS9ZVYCE05"
};

// Initialize Firebase and Database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
