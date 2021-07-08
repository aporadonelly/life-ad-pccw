import { createSelector } from "@reduxjs/toolkit";
import { find, compact, values, pick } from "lodash";
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

export const selectedCompanyUUIDSelector = createSelector(
  featureStateSelector,
  (state) => state.selectedCompanyUUID
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

export const registrationCompanyInformationSelector = createSelector(
  featureStateSelector,
  (state) => state.registrationCompanyInformation
);

export const authorizedPersonAddressByTypeIdSelector = createSelector(
  authorizedPersonSelector,
  (_, addrTypId) => addrTypId,
  (authorizedPerson, addrTypId) =>
    compact(
      values(
        pick(find(authorizedPerson?.authPrsnAddressList, { addrTypId }), [
          "addrRmTxt",
          "addrFlrTxt",
          "addrBldngNmTxt",
          "addrBlckTxt",
          "addrStrtTxt",
          "addrCtyTxt",
          "addrDstrctTxt",
        ])
      )
    ).join(" ")
);

export const authorizedPersonPhoneByTypeIdSelector = createSelector(
  authorizedPersonSelector,
  (_, phnTypId) => phnTypId,
  (authorizedPerson, phnTypId) =>
    find(authorizedPerson?.authPrsnClntPhoneList, { phnTypId })
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

export const directorAddressByTypeIdSelector = createSelector(
  directorSelector,
  (_, addrTypId) => addrTypId,
  (director, addrTypId) =>
    compact(
      values(
        pick(find(director?.authPrsnAddressList, { addrTypId }), [
          "addrRmTxt",
          "addrFlrTxt",
          "addrBldngNmTxt",
          "addrBlckTxt",
          "addrStrtTxt",
          "addrCtyTxt",
          "addrDstrctTxt",
        ])
      )
    ).join(" ")
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

export const partnerAddressByTypeIdSelector = createSelector(
  partnerSelector,
  (_, addrTypId) => addrTypId,
  (partner, addrTypId) =>
    compact(
      values(
        pick(find(partner?.authPrsnAddressList, { addrTypId }), [
          "addrRmTxt",
          "addrFlrTxt",
          "addrBldngNmTxt",
          "addrBlckTxt",
          "addrStrtTxt",
          "addrCtyTxt",
          "addrDstrctTxt",
        ])
      )
    ).join(" ")
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

export const beneficialOwnerAddressByTypeIdSelector = createSelector(
  beneficialOwnerSelector,
  (_, addrTypId) => addrTypId,
  (beneficialOwner, addrTypId) =>
    compact(
      values(
        pick(find(beneficialOwner?.authPrsnAddressList, { addrTypId }), [
          "addrRmTxt",
          "addrFlrTxt",
          "addrBldngNmTxt",
          "addrBlckTxt",
          "addrStrtTxt",
          "addrCtyTxt",
          "addrDstrctTxt",
        ])
      )
    ).join(" ")
);
