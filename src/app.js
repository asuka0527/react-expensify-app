import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

import { getVisibleExpenses } from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// Stateless function component

// Redux Store
const store = configureStore();

// Provider - components listed in the Provider will have access to the redux n store

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
