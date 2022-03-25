import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.navigate("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const AddExpensePageWrapper = (props) => {
  const navigate = useNavigate();
  return <AddExpensePage {...props} navigate={navigate}/>
};

AddExpensePage.propTypes = {
  addExpense: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePageWrapper);
