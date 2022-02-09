import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "./routers/AppRouter";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill", amount: 25 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 500 }));
store.dispatch(setTextFilter("water"));
console.log(getVisibleExpenses(store.getState()));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
