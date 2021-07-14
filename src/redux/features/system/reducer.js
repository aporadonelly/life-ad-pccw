import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import {
  initialState,
  customTypesAdapter,
  countriesAdapter,
  termReasonsAdapter,
  workStreamsAdapter,
  schemesAdapter,
  trusteesAdapter,
} from "./state";
import {
  getSystemEnv,
  getCycleDate,
  getCustomTypeList,
  getCountryList,
  getTermReasons,
  getWrkStrmSttsLst,
  getSchmLst,
  getTrstLst,
} from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "system",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const systemReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getSystemEnv.fulfilled, (state, action) => {
      state.isLoading = false;
      state.systemEnv = action.payload.systemEnv;
    })
    .addCase(getCycleDate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cycleDate = action.payload.cycleDate;
    })
    .addCase(getCustomTypeList.fulfilled, (state, action) => {
      state.isLoading = false;
      customTypesAdapter.upsertMany(
        state.customTypes,
        action.payload.customTypes
      );
    })
    .addCase(getWrkStrmSttsLst.fulfilled, (state, action) => {
      state.isLoading = false;
      workStreamsAdapter.upsertMany(
        state.workStreams,
        action.payload.workStreams
      );
    })
    .addCase(getCountryList.fulfilled, (state, action) => {
      state.isLoading = false;
      countriesAdapter.setAll(state.countries, action.payload.countries);
    })
    .addCase(getTermReasons.fulfilled, (state, action) => {
      state.isLoading = false;
      termReasonsAdapter.setAll(state.termReasons, action.payload.termReasons);
    })
    .addCase(getSchmLst.fulfilled, (state, action) => {
      schemesAdapter.upsertMany(state.schemes, action.payload.schemes);
    })
    .addCase(getTrstLst.fulfilled, (state, action) => {
      trusteesAdapter.upsertMany(state.trustees, action.payload.trustees);
    })
    .addMatcher(
      isAnyOf(
        getSystemEnv.pending,
        getCycleDate.pending,
        getCustomTypeList.pending,
        getWrkStrmSttsLst.pending,
        getCountryList.pending,
        getTermReasons.pending,
        getSchmLst.pending,
        getTrstLst.pending
      ),
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addMatcher(
      isAnyOf(
        getSystemEnv.rejected,
        getCycleDate.rejected,
        getCustomTypeList.rejected,
        getWrkStrmSttsLst.rejected,
        getCountryList.rejected,
        getTermReasons.rejected,
        getSchmLst.rejected,
        getTrstLst.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
);

export default persistReducer(persistConfig, systemReducer);
