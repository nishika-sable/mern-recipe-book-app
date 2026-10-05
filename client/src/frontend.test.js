import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import authReducer from "./state/index";

test("Recipe Book app renders successfully", () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
