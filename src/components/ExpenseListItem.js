import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
const ExpenseListItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt,
}) => {
  return (
    <div>
    <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
      <p>note: {note}</p>
      <p>amount: {amount}</p>
      <p>createdAt: {createdAt}</p>
      <button key={id} onClick={() => dispatch(removeExpense({ id }))}>
        Remove
      </button>
    </div>
  );
};

ExpenseListItem.propTypes = {
  expenses: PropTypes.object,
  description: PropTypes.string,
  note: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
  dispatch: PropTypes.func,
  id: PropTypes.string,
};

export default connect()(ExpenseListItem);
