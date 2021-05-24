import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  resetTermination,
  loadEmpSchemes,
  loadMbrTerm,
  saveTermination,
  validTermination,
  loadTermReason,
} from "./actions";

export const employeeTerminationReducer = createReducer(
  initialState,
  (builder) =>
    builder
      // .addCase(resetTermination, (state, _action) => {
      //   return { ...state, employeeTermination: {} };
      // })
      .addCase(loadEmpSchemes.pending, (state, _action) => {
        return { ...state, clientSchemes: [], isLoading: true, error: null };
      })
      .addCase(loadEmpSchemes.fulfilled, (state, action) => {
        console.log("reducer", action.payload);
        const { clientSchemes } = action.payload;
        return { ...state, isLoading: false, clientSchemes };
      })
      .addCase(loadEmpSchemes.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

      .addCase(loadMbrTerm.pending, (state, _action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loadMbrTerm.fulfilled, (state, action) => {
        const { mbrTerm } = action.payload;
        return { ...state, isLoading: false, mbrTerm };
      })
      .addCase(loadMbrTerm.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

      .addCase(validTermination.pending, (state, _action) => {
        return { ...state, validation: "", isLoading: true, error: null };
      })
      .addCase(validTermination.fulfilled, (state, action) => {
        const { validation } = action.payload;
        return { ...state, isLoading: false, validation };
      })
      .addCase(validTermination.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

      .addCase(saveTermination.pending, (state, _action) => {
        return { ...state, saved: "", isLoading: true, error: null };
      })
      .addCase(saveTermination.fulfilled, (state, action) => {
        const { saved } = action.payload;
        return { ...state, isLoading: false, saved };
      })
      .addCase(saveTermination.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

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
