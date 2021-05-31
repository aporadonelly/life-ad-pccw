import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employers: [],
  authPerson: {},
  authPersonList: [],
  isLoading: false,
  error: null,
});
