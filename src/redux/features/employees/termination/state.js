import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employeeTermination: {},
  loadSchemes: {},
  loadTerms: {},
  validTerms: {},
  loadReason: {},
  isLoading: false,
  error: null,
});
