import { createSelector } from "@reduxjs/toolkit";
import { indAccntLstAdapter } from "./state";

export const featureStateSelector = (state) => state.enrollmentCasualEmployee;

export const indAccntLstSelectors = indAccntLstAdapter.getSelectors(
  (state) => state.indAccntLst
);

export const indAccntLstSelector = createSelector(
  featureStateSelector,
  indAccntLstSelectors.selectAll
);

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);
