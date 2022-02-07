import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  const incrementBy = action.incrementBy ? action.incrementBy : 1;
  const decrementBy = action.decrementBy ? action.decrementBy : 1;
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + incrementBy };
    case "DECREMENT":
      return { count: state.count - decrementBy };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
});

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

store.dispatch({
  type: "DECREMENT",
});
