import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  //Añadir reducers
});

let store;
if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  // Enable Redux Devtools
  store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(reducers, initialState, applyMiddleware(...middleware));
}

export default store;
