import { createEntityAdapter } from "@reduxjs/toolkit";

export const fundPricesAdapter = createEntityAdapter({
  selectId: (fundPrice) => fundPrice.rcdCnt,
});

export const mlfub = createEntityAdapter({});

export const initialState = mlfub.getInitialState({
  isLoading: false,
  error: null,
  fundPrices: fundPricesAdapter.getInitialState(),
});
