import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employeeTermination: {},
  clientSchemes: [],
  mbrTerm: {},
  saved: "",
  //validation: "",
  validation: {},
  isLoading: false,
  isValidating: true,
  isSaving: true,
  isSubmitting: true,
  error: null,
});
