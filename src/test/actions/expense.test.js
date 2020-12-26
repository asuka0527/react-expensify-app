import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// toEqual - for comparing the property values of objects

// removeExpense - TEST CASE
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

// editExpense - TEST CASE
test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "New note" },
  });
});

// addExpense - TEST CASE

test("should setup add expense action obejct with PROVIDED values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should setup add expense action object with DEFAULT values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String),
    },
  });
});
