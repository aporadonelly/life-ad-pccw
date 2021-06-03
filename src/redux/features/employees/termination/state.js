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
});
