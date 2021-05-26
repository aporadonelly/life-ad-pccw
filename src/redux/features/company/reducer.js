import { createReducer } from "@reduxjs/toolkit";
import { LdRegCmpnyInfoforAdmnPrtl } from "./action";
import { initialState } from "./state";

export const companyReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(LdRegCmpnyInfoforAdmnPrtl.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(LdRegCmpnyInfoforAdmnPrtl.fulfilled, (state, action) => {
      const { companyRegInfo } = action.payload;
      return { ...state, isLoading: false, companyRegInfo };
    })
    .addCase(LdRegCmpnyInfoforAdmnPrtl.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);
