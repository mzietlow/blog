// Get visible expenses
export default ({
  expenses,
  filters: { text, sortBy, startDate, endDate },
}) => {
  return expenses
    .filter((expense) => {
      const startDateMatch = !startDate || expense.startDate >= startDate;
      const endDateMatch = !endDate || expense.endDate <= endDate;
      const textMatch =
        expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "type") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
