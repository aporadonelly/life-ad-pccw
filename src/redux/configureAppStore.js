import { createBrowserHistory } from "history";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createRootReducer from "./reducers";
import {
  getSystemEnv,
  getCycleDate,
  getCountryList,
  getTermReasons,
  getCustomTypeList,
} from "./features/system/actions";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default function configureAppStore(preloadedState) {
  const debug = false;
  const middlewares = [routerMiddleware(history)];

  if (debug) {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ],
    preloadedState,
    devTools: debug,
  });

  const persistor = persistStore(store);

  store.dispatch(getSystemEnv());
  store.dispatch(getCycleDate());
  store.dispatch(getCountryList());
  store.dispatch(getTermReasons());
  store.dispatch(getCustomTypeList({ groupId: "GD" }));
  store.dispatch(getCustomTypeList({ groupId: "ID" }));
  store.dispatch(getCustomTypeList({ groupId: "NTN" }));
  store.dispatch(getCustomTypeList({ groupId: "EP" }));
  store.dispatch(getCustomTypeList({ groupId: "NT" }));
  store.dispatch(getCustomTypeList({ groupId: "MB" }));
  store.dispatch(getCustomTypeList({ groupId: "SC" }));
  store.dispatch(getCustomTypeList({ groupId: "ST" }));

  return { store, persistor };
}
