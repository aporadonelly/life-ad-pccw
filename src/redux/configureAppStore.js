import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

export default function configureAppStore(preloadedState) {
  const debug = false;
  const middlewares = [];
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  if (debug) {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
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

  return { store, persistor };
}
