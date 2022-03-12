import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = { sortBy: "amount" };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set textFilter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "testVal",
  });
  expect(state.text).toBe("testVal");
});

test("should set startDateFilter", () => {
  const expectedDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: expectedDate,
  });
  expect(state.startDate).toBe(expectedDate);
});

test("should set endDateFilter", () => {
  const expectedDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: expectedDate,
  });
  expect(state.endDate).toBe(expectedDate);
});
