import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
    />
    <select
      value={props.filters.sortBy}
      onChange={({ target }) => props.dispatch(chooseSortBy(target.value))}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const chooseSortBy = (selectVal) => {
  switch (selectVal) {
    case "date":
      return sortByDate();
    case "amount":
      return sortByAmount();
  }
};

ExpenseListFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Todo: PropTypes setzen @ 4:20 https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900120#overview
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
