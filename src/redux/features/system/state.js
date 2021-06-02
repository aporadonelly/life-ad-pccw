import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  systemEnv: null,
  cycleDate: null,
  isLoading: false,
  error: null,
  reasonTerm: [],
});
