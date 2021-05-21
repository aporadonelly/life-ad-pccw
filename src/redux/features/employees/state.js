import { createEntityAdapter } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter({});

export const initialState = adapter.getInitialState({
  employees: [],
  gender: [],
  idType: [],
  nationality: [],
  placeOfBirth: [],
  employeeType: [],
  industryType: [],
  occupation: [],
  schemeType: [],
  status: [],
  isLoading: false,
  error: null,
});
