import { createReducer } from "@reduxjs/toolkit";
import { getEmployers, viewAuthPerson } from "./actions";
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

    //viewing of authorized person
    .addCase(viewAuthPerson.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(viewAuthPerson.fulfilled, (state, action) => {
      const { authPerson } = action.payload;
      return { ...state, isLoading: false, authPerson };
    })
    .addCase(viewAuthPerson.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);
