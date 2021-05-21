import { createReducer } from "@reduxjs/toolkit";
import { getCompanyRegInfoAction } from "./action";
import { initialState } from "./state";

export const companyReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCompanyRegInfoAction.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(getCompanyRegInfoAction.fulfilled, (state, action) => {
      const { companyRegInfo } = action.payload;
      return { ...state, isLoading: false, companyRegInfo };
    })
    .addCase(getCompanyRegInfoAction.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);
