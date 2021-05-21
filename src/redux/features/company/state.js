import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  companyRegInfo: [],
  isLoading: false,
  error: null,
});
