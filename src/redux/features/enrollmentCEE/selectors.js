import { createSelector } from "@reduxjs/toolkit";

export const featureStateSelector = (state) => state.enrollmentCEE;

export const indAccntLstSelector = createSelector(
  featureStateSelector,
  (state) => state.indAccntLst
);

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);
