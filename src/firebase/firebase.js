import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, onValue } from "firebase/database";

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

push(ref(db, "expenses"), {
  description: "Groceries",
  note: "Saturday Groceries",
  amount: 8860,
  createdAt: 0,
});

push(ref(db, "expenses"), {
  description: "Breakfast",
  note: "Breakfast from Junge",
  amount: 796,
  createdAt: 1,
});

push(ref(db, "expenses"), {
  description: "Shopping",
  note: "Shopping at AEZ",
  amount: 15600,
  createdAt: 2,
});

const snapshotToArray = (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  return expenses;
};

get(ref(db, "expenses")).then((snapshot) => {
  const expenses = snapshotToArray(snapshot);
  console.log(expenses);
});

onValue(ref(db, "expenses"), (snapshot) => {
  const expenses = snapshotToArray(snapshot);
  console.log(expenses);
});
