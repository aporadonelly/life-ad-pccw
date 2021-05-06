import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.user;

export const userSelector = createSelector(
  stateSelector,
  (state) => state.user
);

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);
