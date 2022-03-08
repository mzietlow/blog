import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const actionResult = removeExpense({ id: "123-abc" });
  expect(actionResult).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123-abc",
  });
});

test("should setup edit expense action object", () => {
  const actionResult = editExpense("123-abc", { note: "New note value" });
  expect(actionResult).toEqual({
    type: "EDIT_EXPENSE",
    id: "123-abc",
    expenseUpdate: { note: "New note value" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const actionResult = addExpense(expenseData);

  expect(actionResult).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should setup add expense action object with default values", () => {
  const actionResult = addExpense();
  expect(actionResult).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
