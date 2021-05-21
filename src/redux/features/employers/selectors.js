import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.employers;

export const employersSelector = createSelector(
  stateSelector,
  (state) => state.employers
);
export const authPersonSelector = createSelector(
  stateSelector,
  (state) => state.authPerson
);
export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);
