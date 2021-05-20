import { createReducer } from "@reduxjs/toolkit";
import { getEmployers } from "./actions";
import { initialState } from "./state";

export const employerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getEmployers.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(getEmployers.fulfilled, (state, action) => {
      const { employers } = action.payload;
      return { ...state, isLoading: false, employers };
    })
    .addCase(getEmployers.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);
