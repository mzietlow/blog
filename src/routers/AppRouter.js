import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";



const AppRouter = () => (
  <HashRouter>
    <div>
    <Header/>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<ExpenseDashboardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  </HashRouter>
);

export default AppRouter;