import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getSystemEnv, getCycleDate, loadTermReason } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "system",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const systemReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getSystemEnv.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(getSystemEnv.fulfilled, (state, action) => {
      const { systemEnv } = action.payload;
      return { ...state, isLoading: false, systemEnv };
    })
    .addCase(getSystemEnv.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
    .addCase(getCycleDate.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(getCycleDate.fulfilled, (state, action) => {
      const { cycleDate } = action.payload;
      return { ...state, isLoading: false, cycleDate };
    })
    .addCase(getCycleDate.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    /// previously from termination
    .addCase(loadTermReason.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(loadTermReason.fulfilled, (state, action) => {
      const { reasonTerm } = action.payload;
      return { ...state, isLoading: false, reasonTerm };
    })
    .addCase(loadTermReason.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);

export default persistReducer(persistConfig, systemReducer);
