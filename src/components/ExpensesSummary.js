import React from "react";
import PropTypes from "prop-types";
import getTotalExpense from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import { connect } from "react-redux";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount == 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling{" "}
        {formattedExpensesTotal}
      </h1>
    </div>
  );
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number,
  expensesTotal: PropTypes.number,
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses({ ...state });
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getTotalExpense(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
