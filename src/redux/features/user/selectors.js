import { createSelector } from "@reduxjs/toolkit";

export const featureStateSelector = (state) => state.user;

export const isAuthenticatingSelector = createSelector(
  featureStateSelector,
  (state) => state.isAuthenticating
);

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const userSelector = createSelector(
  featureStateSelector,
  (state) => state.user
);

export const expiresSelector = createSelector(
  featureStateSelector,
  (state) => state.expires
);
