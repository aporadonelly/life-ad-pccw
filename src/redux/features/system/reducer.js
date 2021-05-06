import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getSystemEnv, getCycleDate } from "./actions";

export const systemReducer = createReducer(initialState, (builder) =>
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
);
