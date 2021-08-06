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
    .then(() => {
      asyncSequence(
        [
          getSystemEnv(),
          getCycleDate(),
          getCountryList(),
          getTermReasons(),
          getSchmLst(),
          getTrstLst(),
          getCustomTypeList({ groupId: "GD" }),
          getCustomTypeList({ groupId: "ID" }),
          getCustomTypeList({ groupId: "NTN" }),
          getCustomTypeList({ groupId: "EP" }),
          getCustomTypeList({ groupId: "NT" }),
          getCustomTypeList({ groupId: "MB" }),
          getCustomTypeList({ groupId: "SC" }),
          getCustomTypeList({ groupId: "ST" }),
          getCustomTypeList({ groupId: "NT" }),
          getCustomTypeList({ groupId: "CI" }),
          getCustomTypeList({ groupId: "CP" }),
          getCustomTypeList({ groupId: "ST" }),
          getCustomTypeList({ groupId: "FQ" }),
          getCustomTypeList({ groupId: "PM" }),
          getCustomTypeList({ groupId: "UB" }),
          getCustomTypeList({ groupId: "CO" }),
          getCustomTypeList({ groupId: "PP_RS" }),
          getWrkStrmSttsLst({ workstream: "ENR" }),
          getWrkStrmSttsLst({ workstream: "REG" }),
        ],
        store.dispatch
      );
    })
    .catch(() => {
      window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;
    });

  return { store, persistor };
}
