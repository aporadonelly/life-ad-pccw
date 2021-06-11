import { createBrowserHistory } from "history";
import {
  configureStore,
  getDefaultMiddleware,
  unwrapResult,
} from "@reduxjs/toolkit";
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
import { getSystemEnv, getCycleDate } from "./features/system/actions";
import { reissue } from "./features/user/actions";

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

  store
    .dispatch(reissue())
    .then(unwrapResult)
    .then(() => {
      store.dispatch(getSystemEnv());
      store.dispatch(getCycleDate());
    })
    .catch(() => {
      window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;
    });

  return { store, persistor };
}
