import React from "react";
import { render } from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./store/reducer";
import { sagaWatcher } from "./store/saga";
import { localStorageMiddleware } from "./utils/reduxLocalStorageMiddleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const saga = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, saga, localStorageMiddleware))
);

saga.run(sagaWatcher);

import { HomePage } from "./pages/Home";

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);
