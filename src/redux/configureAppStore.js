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
import { asyncSequence } from "@utils";

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
    .then(async () => {
      await store.dispatch(getSystemEnv());
      await store.dispatch(getCycleDate());
      await store.dispatch(getCountryList());
      await store.dispatch(getTermReasons());
      await store.dispatch(getSchmLst());
      await store.dispatch(getTrstLst());
      await store.dispatch(getCustomTypeList({ groupId: "GD" }));
      await store.dispatch(getCustomTypeList({ groupId: "ID" }));
      await store.dispatch(getCustomTypeList({ groupId: "NTN" }));
      await store.dispatch(getCustomTypeList({ groupId: "EP" }));
      await store.dispatch(getCustomTypeList({ groupId: "NT" }));
      await store.dispatch(getCustomTypeList({ groupId: "MB" }));
      await store.dispatch(getCustomTypeList({ groupId: "SC" }));
      await store.dispatch(getCustomTypeList({ groupId: "ST" }));
      await store.dispatch(getCustomTypeList({ groupId: "NT" }));
      await store.dispatch(getCustomTypeList({ groupId: "CI" }));
      await store.dispatch(getCustomTypeList({ groupId: "CP" }));
      await store.dispatch(getCustomTypeList({ groupId: "ST" }));
      await store.dispatch(getCustomTypeList({ groupId: "FQ" }));
      await store.dispatch(getCustomTypeList({ groupId: "PM" }));
      await store.dispatch(getCustomTypeList({ groupId: "UB" }));
      await store.dispatch(getCustomTypeList({ groupId: "CO" }));
      await store.dispatch(getCustomTypeList({ groupId: "PP_RS" }));
      await store.dispatch(getWrkStrmSttsLst({ workstream: "ENR" }));
      await store.dispatch(getWrkStrmSttsLst({ workstream: "REG" }));
    })
    .catch(() => {
      window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;
    });

  return { store, persistor };
}
