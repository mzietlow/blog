import React from "react";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { useSelector, connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense } from "../actions/expenses";

const EditExpensePage = ({ dispatch }) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === id)
  );

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expenseUpdate) => {
          console.log(expenseUpdate);
          dispatch(editExpense(id, expenseUpdate));
          console.log(editExpense(id, expenseUpdate));
          console.log(expenseUpdate);
          console.log(id);
          navigate("/");
        }}
      />
    </div>
  );
};

EditExpensePage.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EditExpensePage);
