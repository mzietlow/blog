import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import { Provider } from "react-redux";
import "./routers/AppRouter";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import { startSetExpenses } from "./actions/expenses";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));
console.log("Hallo welt0");
store.dispatch(startSetExpenses()).then(() => {
  console.log("Hallo welt1");
  ReactDOM.render(jsx, document.getElementById("app"));
});
