import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => (
  <div>This is from my AddExpensePage component</div>
);

const HelpPage = () => <div>This is from my HelpPage component</div>;

const EditExpensePage = () => (
  <div>This is from my EditExpensePage component</div>
);

const NotFoundPage = () => <div>404!</div>;

const routes = (
  <HashRouter>
    <Routes>
    <Route path='*' element={<NotFoundPage />} />
    <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit" element={<EditExpensePage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
