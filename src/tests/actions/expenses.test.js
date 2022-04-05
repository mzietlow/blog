import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from "../../actions/expenses";
import createMockStore from "redux-mock-store";
import { get, ref, set } from "firebase/database";

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  set(ref(database, "expenses"), expensesData).then(() => done());
});

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
  const actionResult = addExpense(expenses[2]);

  expect(actionResult).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore([thunk])({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return get(ref(database, `expenses/${actions[0].expense.id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore([thunk])({});
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return get(ref(database, `expenses/${actions[0].expense.id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore([thunk])({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});

test("should remove expense on startRemoveExpense", () => {
  const store = createMockStore([thunk])(expenses[0]);
  store.dispatch(startRemoveExpense(expenses[0])).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: expenses[0].id,
    });

    get(ref(database, `expenses/${expenses[0].id}`)).then((snapshot) =>
      expect(snapshot.val()).toBeNull()
    );
  });
});
