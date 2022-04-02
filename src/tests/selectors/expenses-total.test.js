import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/expenses-total";

test("should return 0 if no expenses", () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("should correctly add up multiple expenses", () => {
  const result = getExpensesTotal([expenses[0], expenses[1], expenses[2]]);
  expect(result).toBe(195 + 109500 + 4500);
});
