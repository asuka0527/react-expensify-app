import uuid from "uuid";
import database from "../firebase/firebase";

//----------------
// Action GENERATOR

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });

// will only work when you have thunk - thunk will allow us to creat asynchrounous action like a firebase data call
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
