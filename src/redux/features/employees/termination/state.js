import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employeeTermination: {},
  clientSchemes: [],
  mbrTerm: {},
  saved: null,
  //validation: {}, NOTE: parameters previously
  validation: null,
  valuesActions: {},
  isLoading: false,
  isValidating: true,
  isSubmitting: true,
  error: null,
  entitleLspSp: [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
  lspSp: [
    { value: "LS_LSP", label: "LSP" },
    { value: "LS_SP", label: "SP" },
  ],
  paymethod: [],
  bankList: [],
  clntBnkInfo: {},
});
