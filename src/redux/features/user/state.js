import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  token: null,
  user: null,
  isLoading: false,
  error: null,
});
