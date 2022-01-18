import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => (
  <div>This is from my AddExpensePage component</div>
);

const HelpPage = () => (
  <div>This is from my HelpPage component</div>
);

const EditExpensePage = () => (
  <div>This is from my EditExpensePage component</div>
);

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/blog" element={<ExpenseDashboardPage/>} />
      <Route path="/blog/create" element={<AddExpensePage/>} />
      <Route path="/blog/edit" element={<EditExpensePage/>} />
      <Route path="/blog/help" element={<HelpPage/>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
