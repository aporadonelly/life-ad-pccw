import { createSelector } from "@reduxjs/toolkit";
import { reduce, map, concat, compact, find } from "lodash";
import {
  employersAdapter,
  contactPersonsAdapter,
  gradeListAdapter,
} from "./state";

export const employersSelectors = employersAdapter.getSelectors(
  (state) => state.employers
);

export const contactPersonsSelectors = contactPersonsAdapter.getSelectors(
  (state) => state.contactPersons
);

export const gradeListSelectors = gradeListAdapter.getSelectors(
  (state) => state.gradeList
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

export const enrCompanyInfoSelector = createSelector(
  featureStateSelector,
  (state) => state.enrCompanyInfo
);

export const payrollGrpInfoSelector = createSelector(
  featureStateSelector,
  (state) => state.payrollGrpInfo
);

export const gradeListSelector = createSelector(
  featureStateSelector,
  gradeListSelectors.selectAll
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
  (_, companyName) => companyName,
  employersSelectors.selectById
);

export const contactPersonsSelector = createSelector(
  featureStateSelector,
  contactPersonsSelectors.selectAll
);

export const contactPersonSelector = createSelector(
  featureStateSelector,
  (_, cntctPrsnUuid) => cntctPrsnUuid,
  contactPersonsSelectors.selectById
);

export const contactPersonClientPhoneByTypeIdSelector = createSelector(
  contactPersonSelector,
  (_, _cntctPrsnUuid, phnTypId) => phnTypId,
  (contact, phnTypId) => find(contact?.clntPhones, { phnTypId })
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

export const employerSchemeSelector = createSelector(
  employerSchemesSelector,
  (_, _companyName, schmUuid) => schmUuid,
  (schemes, schmUuid) => find(schemes, { id: schmUuid })
);
