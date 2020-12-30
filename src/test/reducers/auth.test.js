import authReducers from "../../reducers/auth";

test("should set uid to login", () => {
  const action = { type: "LOGIN", uid: "123" };
  const state = authReducers({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid to logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducers({ uid: "anything" }, action);
  expect(state).toEqual({}); // state to empty to object
});
