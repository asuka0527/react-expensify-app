import { createStore } from "redux";

// Action generators - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// Reducers
// 1. Reducers are pure function (output is only determined by input) (does not interact iwth global scope varibales)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// Watches every change in the store
// you can unsubcribe by creating this variable and placing it where you want to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

// Actions - and object the gets sent to the store, let you change the redux store

//Types of actions : increment, decrement, reset

// increment

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: "INCREMENT",
// });

// unsubscribe();
// store.dispatch({
//   type: "RESET",
// });

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

// store.dispatch({
//   type: "SET",
//   count: 101,
// });

store.dispatch(setCount({ count: 150 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());
