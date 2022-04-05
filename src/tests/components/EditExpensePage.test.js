import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editedExpense, wrapper, editExpense, startRemoveExpense, navigate;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  navigate = jest.fn();
  editedExpense = expenses[0];
  wrapper = shallow(
    <EditExpensePage
      expense={editedExpense}
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      navigate={navigate}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(navigate).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(editedExpense.id, expenses[1]);
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(navigate).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: editedExpense.id });
});
