import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { initSagas } from "../initSagas";
import createSagaMiddleware from "redux-saga";

export default function ConfigureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  console.info("Saga middleware implemented");
  const middleware = [sagaMiddleware, logger];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  initSagas(sagaMiddleware);
  return store;
}
