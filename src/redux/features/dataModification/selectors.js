import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.dataModification;

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);
