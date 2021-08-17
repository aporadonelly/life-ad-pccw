import { createEntityAdapter } from "@reduxjs/toolkit";

export const enrollmentCEE = createEntityAdapter({});

export const initialState = enrollmentCEE.getInitialState({
  isLoading: false,
  error: null,
  indAccntLst: null,
});
