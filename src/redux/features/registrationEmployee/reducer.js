import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { identity, pickBy } from "lodash";
import { initialState, employeesAdapter } from "./state";
import { draftEnquiry, ldSrchRegInd } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "registrationEmployee",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const registrationEmployeeReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(draftEnquiry, (state, action) => {
      state.draftEnquiry = pickBy(action.payload, identity);
    })
    .addCase(ldSrchRegInd.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      employeesAdapter.setAll(state.employees, []);
    })
    .addCase(ldSrchRegInd.fulfilled, (state, action) => {
      state.isLoading = false;
      employeesAdapter.upsertMany(state.employees, action.payload.employees);
    })
    .addCase(ldSrchRegInd.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default persistReducer(persistConfig, registrationEmployeeReducer);
