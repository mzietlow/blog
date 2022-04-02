import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>
        {numeral(amount / 100).format("$0,0.00")} -{" "}
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
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

export default ExpenseListItem;
