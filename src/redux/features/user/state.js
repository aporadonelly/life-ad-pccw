import { createEntityAdapter } from "@reduxjs/toolkit";

export const authAdapter = createEntityAdapter({});

export const initialState = authAdapter.getInitialState({
  isAuthenticating: true,
  isLoading: false,
  error: null,
  user: null,
  expires: null,
});
