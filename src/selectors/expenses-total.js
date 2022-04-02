// Get total expense amount
export default (expenses) => {
  console.log(expenses);
  return expenses.map((expense) => expense.amount).reduce((x, y) => x + y, 0);
};
