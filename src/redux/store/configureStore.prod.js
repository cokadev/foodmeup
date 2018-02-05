import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

/**
 * Configure dev store
 */
export default function configureStore(initialState) {
  let middlewares = [thunk];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );

  const store = createStoreWithMiddleware(reducers, initialState);

  return store;
}
