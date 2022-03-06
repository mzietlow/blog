import React from "react";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { useSelector, connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = ({ dispatch }) => {
  const params = useParams();
  const navigate = useNavigate();
  const expenseId = params.id;
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === expenseId)
  );

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expenseUpdate) => {
          console.log(expenseUpdate);
          dispatch(editExpense(expenseId, expenseUpdate));
          navigate("/");
        }}
      />
      <button
        key={expenseId}
        onClick={() => {
          dispatch(removeExpense({ id: expenseId }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

EditExpensePage.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EditExpensePage);
