import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Tuno8L7it88A8PEM1BEhFzI3Agqt9kE",
  authDomain: "expensify-bbdf3.firebaseapp.com",
  databaseURL: "https://expensify-bbdf3-default-rtdb.firebaseio.com",
  projectId: "expensify-bbdf3",
  storageBucket: "expensify-bbdf3.appspot.com",
  messagingSenderId: "822748758040",
  appId: "1:822748758040:web:4ec4de08a1da52f18e436d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
set(ref(db), {
  name: "mzietlow",
  age: 25,
  isSingle: false,
});

set(ref(db, "age"), 27)
