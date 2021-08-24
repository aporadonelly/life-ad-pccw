import { createEntityAdapter } from "@reduxjs/toolkit";

export const indAccntLstAdapter = createEntityAdapter({
  selectId: (indAccntLst) => indAccntLst.mbrTypDscrptn,
});

export const enrollmentCEE = createEntityAdapter({});

export const initialState = enrollmentCEE.getInitialState({
  isLoading: false,
  error: null,
  indAccntLst: indAccntLstAdapter.getInitialState(),
});
