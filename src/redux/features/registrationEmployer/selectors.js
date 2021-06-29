import { createSelector } from "@reduxjs/toolkit";
import {
  authorizedPersonsAdapter,
  directorsAdapter,
  partnersAdapter,
  beneficialOwnersAdapter,
} from "./state";

export const authorizedPersonsSelectors = authorizedPersonsAdapter.getSelectors(
  (state) => state.authorizedPersons
);

export const directorsSelectors = directorsAdapter.getSelectors(
  (state) => state.directors
);

export const partnersSelectors = partnersAdapter.getSelectors(
  (state) => state.partners
);

export const beneficialOwnersSelectors = beneficialOwnersAdapter.getSelectors(
  (state) => state.beneficialOwners
);

export const featureStateSelector = (state) => state.registrationEmployer;

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const selectedClientUUIDSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedClientUUID
);

export const authorizedPersonsSelector = createSelector(
  featureStateSelector,
  authorizedPersonsSelectors.selectAll
);

export const authorizedPersonSelector = createSelector(
  featureStateSelector,
  selectedClientUUIDSelector,
  authorizedPersonsSelectors.selectById
);

export const directorsSelector = createSelector(
  featureStateSelector,
  directorsSelectors.selectAll
);

export const directorSelector = createSelector(
  featureStateSelector,
  selectedClientUUIDSelector,
  directorsSelectors.selectById
);

export const partnersSelector = createSelector(
  featureStateSelector,
  partnersSelectors.selectAll
);

export const partnerSelector = createSelector(
  featureStateSelector,
  selectedClientUUIDSelector,
  partnersSelectors.selectById
);

export const beneficialOwnersSelector = createSelector(
  featureStateSelector,
  beneficialOwnersSelectors.selectAll
);

export const beneficialOwnerSelector = createSelector(
  featureStateSelector,
  selectedClientUUIDSelector,
  beneficialOwnersSelectors.selectById
);
