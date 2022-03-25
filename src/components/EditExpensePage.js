import React from "react";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { useSelector, connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expenseUpdate) => {
    this.props.editExpense(this.props.expense.id, expenseUpdate);
    this.props.navigate("/");
  };
  onRemoveClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.navigate("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button key={this.props.expense.id} onClick={this.onRemoveClick}>
          Remove
        </button>
      </div>
    );
  }
}

const EditExpensePageWrapper = (props) => {
  const navigate = useNavigate();
  const expenseId = useParams().id;
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === expenseId)
  );
  return (
    <EditExpensePage
      {...props}
      navigate={navigate}
      expense={expense}
    />
  ); // Why doesnt this work?
};

EditExpensePage.propTypes = {
  expense: PropTypes.object.isRequired,
  navigate: PropTypes.func,
  editExpense: PropTypes.func,
  removeExpense: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expenseId, expenseUpdate) => {
    dispatch(editExpense(expenseId, expenseUpdate));
  },
  removeExpense: ({ id }) => {
    dispatch(removeExpense({ id }));
  },
});

export default connect(undefined, mapDispatchToProps)(EditExpensePageWrapper);
