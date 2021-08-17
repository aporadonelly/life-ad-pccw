import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { initialState, indAccntLstAdapter } from "./state";
import { getIndAccntLst } from "./actions";

const persistConfig = {
  key: "enrollmentCasualEmployee",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const enrollmentCasualEmployeeReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getIndAccntLst.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getIndAccntLst.fulfilled, (state, action) => {
      state.isLoading = false;
      indAccntLstAdapter.setAll(state.indAccntLst, action.payload.indAccntLst);
    })
);

export default persistReducer(persistConfig, enrollmentCasualEmployeeReducer);
