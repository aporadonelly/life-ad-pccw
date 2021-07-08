import { createBrowserHistory } from "history";
import {
  configureStore,
  getDefaultMiddleware,
  unwrapResult,
} from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import { resetMiddleware } from "./middlewares";
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
  getWrkStrmSttsLst,
  getSchmLst,
  getTrstLst,
} from "./features/system/actions";
import { reissue } from "./features/user/actions";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default function configureAppStore(preloadedState) {
  const debug = process.env.NODE_ENV !== "production";
  const middlewares = [routerMiddleware(history), resetMiddleware()];

  // if (debug) {
  //   const { logger } = require("redux-logger");
  //   middlewares.push(logger);
  // }

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
      store.dispatch(getCountryList());
      store.dispatch(getTermReasons());
      store.dispatch(getSchmLst());
      store.dispatch(getTrstLst());
      store.dispatch(getCustomTypeList({ groupId: "GD" }));
      store.dispatch(getCustomTypeList({ groupId: "ID" }));
      store.dispatch(getCustomTypeList({ groupId: "NTN" }));
      store.dispatch(getCustomTypeList({ groupId: "EP" }));
      store.dispatch(getCustomTypeList({ groupId: "NT" }));
      store.dispatch(getCustomTypeList({ groupId: "MB" }));
      store.dispatch(getCustomTypeList({ groupId: "SC" }));
      store.dispatch(getCustomTypeList({ groupId: "ST" }));
      store.dispatch(getCustomTypeList({ groupId: "NT" }));
      store.dispatch(getCustomTypeList({ groupId: "CI" }));
      store.dispatch(getCustomTypeList({ groupId: "CP" }));
      store.dispatch(getCustomTypeList({ groupId: "ST" }));
      store.dispatch(getWrkStrmSttsLst({ workstream: "ENR" }));
      store.dispatch(getWrkStrmSttsLst({ workstream: "REG" }));
    })
    .catch(() => {
      window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;
    });

  return { store, persistor };
}
