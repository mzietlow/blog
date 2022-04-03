import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  get,
  push,
} from "firebase/database";

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
  user: {
    name: "mzietlow",
    age: 25,
    isSingle: false,
    attributes: {
      height: 180,
      weight: 65.5,
    },
  },
})
  .then(() => {
    console.log("Data is saved");
  })
  .catch((e) => {
    console.log(`Data saving failed ${e}`);
  });

remove(ref(db, "user/isSingle"))
  .then(() => console.log("Data was removed"))
  .catch((e) => console.log("Data removal failed", e));

setTimeout(
  () =>
    update(ref(db, "user"), {
      name: "mike",
      age: 29,
    })
      .then(() => console.log("Data was updated"))
      .catch((e) => console.log("Data update failed", e)),
  2000
);

update(ref(db), {
  "user/name": "Mike",
})
  .then(() => console.log("Updated user name"))
  .catch((e) => console.log("Update failed", e));

onValue(ref(db), (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(
  () =>
    update(ref(db, "user"), {
      name: "Malte",
    })
      .then(() => console.log("Updated user name"))
      .catch((e) => console.log("Update failed", e)),
  2500
);

update(ref(db), {
  "user/name": "Mike",
})
  .then(() => console.log("Updated user name"))
  .catch((e) => console.log("Update failed", e));

const unsubscribeOnValue = onValue(
  ref(db),
  (snapshot) => {
    console.log(snapshot.val());
  },
  (e) => console.log("Error with data fetching", e)
);

setTimeout(
  () =>
    update(ref(db, "user"), {
      name: "Malte",
    })
      .then(() => console.log("Updated user name"))
      .catch((e) => console.log("Update failed", e)),
  2500
);

setTimeout(() => unsubscribeOnValue(), 2500);

setTimeout(
  () =>
    update(ref(db, "user"), {
      name: "Mike",
    })
      .then(() => console.log("Updated user name"))
      .catch((e) => console.log("Update failed", e)),
  4500
);

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
