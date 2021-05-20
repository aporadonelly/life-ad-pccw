import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employeeTermination: {},
  loadSchemes: {},
  loadTerms: {},
  isLoading: false,
  error: null,
});
