import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Malte malte Malte 🖌️</h1>
    <NavLink className={({ isActive }) => "nav-link" + (isActive ? "-selected" : "")} to="/">Home</NavLink>
    <NavLink className={({ isActive }) => "nav-link" + (isActive ? "-selected" : "")} to="/create">Create Expense</NavLink>
    <NavLink className={({ isActive }) => "nav-link" + (isActive ? "-selected" : "")} to="/edit">Edit Expense</NavLink>
    <NavLink className={({ isActive }) => "nav-link" + (isActive ? "-selected" : "")} to="/help">Help</NavLink>
  </header>
);

export default Header;