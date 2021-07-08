import { createSelector } from "@reduxjs/toolkit";
import { reduce, map, concat, compact, find } from "lodash";
import { employersAdapter, contactPersonsAdapter } from "./state";

export const employersSelectors = employersAdapter.getSelectors(
  (state) => state.employers
);

export const contactPersonsSelectors = contactPersonsAdapter.getSelectors(
  (state) => state.contactPersons
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

export const selectedEmployerUUIDSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedEmployerUUID
);

export const selectedSchemeUUIDSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedSchemeUUID
);

export const selectedCompanyUUIDSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedCompanyUUID
);

export const enrCompanyInfoSelector = createSelector(
  featureStateSelector,
  (state) => state.enrCompanyInfo
);

export const enrContactByTypeIdSelector = createSelector(
  enrCompanyInfoSelector,
  (_, cntctPrsnTypId) => cntctPrsnTypId,
  (enrCompanyInfo, cntctPrsnTypId) =>
    find(enrCompanyInfo?.contactPersons, { cntctPrsnTypId })
);

export const gradeInfoSelector = createSelector(
  featureStateSelector,
  (state) => state.gradeInfo
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

export const contactPersonsSelector = createSelector(
  featureStateSelector,
  contactPersonsSelectors.selectAll
);

export const employerSchemesSelector = createSelector(
  employerSelector,
  (employer) =>
    compact(
      reduce(
        employer?.branches,
        (result, branch) =>
          branch?.enrollments
            ? concat(
                result,
                map(
                  branch.enrollments,
                  ({ scheme, employer }) =>
                    scheme && {
                      ...scheme,
                      employer,
                    }
                )
              )
            : result,
        []
      )
    )
);
