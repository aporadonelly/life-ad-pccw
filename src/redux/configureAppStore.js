import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./reducers";
import { getSystemEnv, getCycleDate } from "./features/system/actions";

export default function configureAppStore(preloadedState) {
  const debug = false;
  const middlewares = [];

  if (debug) {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
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

  return { store, persistor };
}
