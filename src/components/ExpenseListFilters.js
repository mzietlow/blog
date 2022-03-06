import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) =>
    this.setState(() => ({ calendarFocused }));

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={({ target }) =>
            this.props.dispatch(chooseSortBy(target.value))
          }
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        ></DateRangePicker>
      </div>
    );
  }
}

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
