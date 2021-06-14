import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employers: [],
  authPerson: {},
  companyRegInfo: [],
  authPersonList: [],
  contactPerson: [],
  isLoading: false,
  error: null,
});
