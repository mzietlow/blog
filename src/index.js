import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import { Provider } from "react-redux";
import "./routers/AppRouter";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill", amount: 25 }));
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 500, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Rent", amount: 1300 }));
console.log(getVisibleExpenses(store.getState()));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
