import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  resetTermination,
  loadEmpSchemes,
  loadMbrTerm,
  saveTermination,
  validTermination,
  passValuesActions,
  loadPayMethod,
  loadBankList,
  loadClntBnkInfo,
} from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "employeeTermination",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

export const employeeTerminationReducer = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(resetTermination, (state, _action) => {
        return {
          ...state,
          saved: "",
          validation: null,
          valuesActions: {},
        };
      })

      .addCase(loadEmpSchemes.pending, (state, _action) => {
        return { ...state, clientSchemes: [], isLoading: true, error: null };
      })
      .addCase(loadEmpSchemes.fulfilled, (state, action) => {
        //console.log("reducer", action.payload);
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
        return { ...state, validation: "", isValidating: true, error: null };
      })
      .addCase(validTermination.fulfilled, (state, action) => {
        const { validation } = action.payload;
        return { ...state, isValidating: false, validation };
      })
      .addCase(validTermination.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isValidating: false, validation: error }; /// error changed to validation
      })

      .addCase(saveTermination.pending, (state, _action) => {
        return { ...state, saved: "", isSaving: true, error: null };
      })
      .addCase(saveTermination.fulfilled, (state, action) => {
        const { saved } = action.payload;
        return { ...state, isSaving: false, saved };
      })
      .addCase(saveTermination.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isSaving: false, saved: error }; /// error changed to save
      })

      .addCase(passValuesActions, (state, action) => {
        return { ...state, valuesActions: action.payload };
      })

      .addCase(loadPayMethod.pending, (state, _action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loadPayMethod.fulfilled, (state, action) => {
        const { paymethod } = action.payload;
        return { ...state, isLoading: false, paymethod };
      })
      .addCase(loadPayMethod.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

      .addCase(loadBankList.pending, (state, _action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loadBankList.fulfilled, (state, action) => {
        const { bankList } = action.payload;
        return { ...state, isLoading: false, bankList };
      })
      .addCase(loadBankList.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })

      .addCase(loadClntBnkInfo.pending, (state, _action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(loadClntBnkInfo.fulfilled, (state, action) => {
        const { clntBnkInfo } = action.payload;
        return { ...state, isLoading: false, clntBnkInfo };
      })
      .addCase(loadClntBnkInfo.rejected, (state, action) => {
        const { error } = action.payload;
        return { ...state, isLoading: false, error };
      })
);

export default persistReducer(persistConfig, employeeTerminationReducer);
