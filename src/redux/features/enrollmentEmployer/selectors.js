import { createSelector } from "@reduxjs/toolkit";
import { reduce, map, concat, compact } from "lodash";
import { employersAdapter } from "./state";

export const employersSelectors = employersAdapter.getSelectors(
  (state) => state.employers
);

export const featureStateSelector = (state) => state.enrollmentEmployer;

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const draftEnquirySelector = createSelector(
  featureStateSelector,
  (state) => state.draftEnquiry
);

export const selectedPnsnIdSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedPnsnId
);

export const employersSelector = createSelector(
  featureStateSelector,
  employersSelectors.selectAll
);

export const employerSelector = createSelector(
  featureStateSelector,
  selectedPnsnIdSelector,
  employersSelectors.selectById
);

export const schemesSelector = createSelector(employerSelector, (employer) =>
  compact(
    reduce(
      employer?.branches,
      (result, branch) =>
        branch?.enrollments
          ? concat(
              result,
              map(branch.enrollments, ({ scheme, employer }) => ({
                ...scheme,
                employer,
              }))
            )
          : result,
      []
    )
  )
);
