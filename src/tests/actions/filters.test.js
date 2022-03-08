import moment from "moment";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const actionResult = setStartDate(moment(0));
  expect(actionResult).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const actionResult = setEndDate(moment(0));
  expect(actionResult).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter action object with provided values", () => {
  const actionResult = setTextFilter("test");
  expect(actionResult).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test",
  });
});
test("should generate set text filter action object with default values", () => {
  const actionResult = setTextFilter();
  expect(actionResult).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate sort by amount action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});
