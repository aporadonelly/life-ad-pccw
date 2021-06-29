import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { identity, pickBy } from "lodash";
import { initialState, employersAdapter } from "./state";
import { draftEnquiry, setSelectedPnsnId, ldSrchCmpny } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "enrollmentEmployer",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const enrollmentEmployerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(draftEnquiry, (state, action) => {
      state.draftEnquiry = pickBy(action.payload, identity);
    })
    .addCase(setSelectedPnsnId, (state, action) => {
      state.selectedPnsnId = action.payload.pnsnId;
    })
    .addCase(ldSrchCmpny.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      employersAdapter.setAll(state.employers, []);
    })
    .addCase(ldSrchCmpny.fulfilled, (state, action) => {
      state.isLoading = false;
      employersAdapter.upsertMany(state.employers, action.payload.employers);
    })
    .addMatcher(isAnyOf(ldSrchCmpny.rejected), (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default persistReducer(persistConfig, enrollmentEmployerReducer);
