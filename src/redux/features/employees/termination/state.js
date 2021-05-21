import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employeeTermination: {},
  clientSchemes: [],
  empTerm: {},
  saved: "",
  validation: "",
  isLoading: false,
  error: null,
});
