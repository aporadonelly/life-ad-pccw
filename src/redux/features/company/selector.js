import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.companyRegInfo;

export const companyRegInfoSelector = createSelector(
  stateSelector,
  (state) => state.companyRegInfo
);

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);
