import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

let logger = "";

if (process.env.NODE_ENV === "development") {
  logger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(rootReducer, logger);
export const persistor = persistStore(store);
