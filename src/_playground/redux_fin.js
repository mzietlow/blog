import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// Expenses Reducer Methods
// Remove; Edit; Set Text Filter ; Sort By Date ...
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = ({ id, expenseUpdate } = {}) => ({
  type: "EDIT_EXPENSE",
  id,
  expenseUpdate,
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.expenseUpdate };
        }
        return expense;
      });
    default:
      return state;
  }
};

// Filters Reducer Methods
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  date: startDate,
});
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  date: endDate,
});

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = ({
  expenses,
  filters: { text, sortBy, startDate, endDate },
}) => {
  return expenses
    .filter((expense) => {
      const startDateMatch = startDate || expense.startDate >= startDate;
      const endDateMatch = endDate || expense.endDate <= endDate;
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

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 100 })
);
store.dispatch(removeExpense({ id: expense1.expense.id }));
store.dispatch(
  editExpense({
    id: expense2.expense.id,
    expenseUpdate: { description: "MyTest221" },
  })
);

store.dispatch(setTextFilter("Test!"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate()); // => undefined
store.dispatch(setEndDate(1250));

// TODO WAS console.log(store.getState().filter(expense=> ));
/*
const demoState = {
  expenses: [
    {
      id: "aspdpfj",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
*/

editExpense;

const user = {
  name: "Jen",
  age: 25,
};
const city = {
  cityName: "Hamburg",
  cityAge: 25,
};
console.log({ ...user, ...city });
