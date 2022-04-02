import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";


test("should render ExpensesSummary with 0 expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0}/>);
  expect(wrapper).toMatchSnapshot();
});
test("should render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
  expect(wrapper).toMatchSnapshot();
});
test("should render ExpensesSummary with 2 expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expensesTotal={12.3} />
  );
  expect(wrapper).toMatchSnapshot();
});
