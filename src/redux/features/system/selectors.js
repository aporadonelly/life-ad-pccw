import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.system;

export const cycleDateSelector = createSelector(
  stateSelector,
  (state) => state.cycleDate
);

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);
