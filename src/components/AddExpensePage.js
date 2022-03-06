import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { PropTypes } from "prop-types";

const AddExpensePage = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense);
          dispatch(addExpense(expense));
          console.log(addExpense(expense));
          navigate("/");
        }}
      />
    </div>
  );
};

AddExpensePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddExpensePage);
