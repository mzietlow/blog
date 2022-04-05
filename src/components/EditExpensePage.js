import React from "react";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";
import { useSelector, connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expenseUpdate) => {
    this.props.startEditExpense(this.props.expense.id, expenseUpdate);
    this.props.navigate("/");
  };
  onRemoveClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
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
  );
};

EditExpensePage.propTypes = {
  expense: PropTypes.object.isRequired,
  navigate: PropTypes.func,
  startEditExpense: PropTypes.func,
  startRemoveExpense: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (expenseId, expenseUpdate) => {
    dispatch(startEditExpense(expenseId, expenseUpdate));
  },
  startRemoveExpense: ({ id }) => {
    dispatch(startRemoveExpense({ id }));
  },
});

export default connect(undefined, mapDispatchToProps)(EditExpensePageWrapper);
