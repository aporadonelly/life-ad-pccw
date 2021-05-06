import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  cycleDate: null,
  isLoading: false,
  error: null,
});
