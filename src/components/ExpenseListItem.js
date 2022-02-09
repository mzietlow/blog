import React from "react";
import PropTypes from "prop-types";

const ExpenseListItem = ({ description, note, amount, createdAt }) => (
  <div>
  <h2>{description}</h2>
  <p>note: {note}</p>
  <p>amount: {amount}</p>
  <p>createdAt: {createdAt}</p>
  </div>
);

ExpenseListItem.propTypes = {
  expenses: PropTypes.object,
  description: PropTypes.string,
  note: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
};

export default ExpenseListItem;
