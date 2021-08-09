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

export const authorizedPersonsSelector = createSelector(
  featureStateSelector,
  authorizedPersonsSelectors.selectAll
);

export const authorizedPersonSelector = createSelector(
  featureStateSelector,
  (_, clntUuid) => clntUuid,
  authorizedPersonsSelectors.selectById
);

export const registrationCompanyInformationSelector = createSelector(
  featureStateSelector,
  (state) => state.registrationCompanyInformation
);

export const addressByTypeIdSelector = createSelector(
  registrationCompanyInformationSelector,
  (_, addrTypId) => addrTypId,
  (registrationCompanyInformation, addrTypId) =>
    compact(
      values(
        pick(
          find(
            registrationCompanyInformation?.ldRegCmpnyInfoforAdmnPrtlProjection
              ?.client?.addresses,
            { addrTypId }
          ),
          [
            "addrRmTxt",
            "addrFlrTxt",
            "addrBldngNmTxt",
            "addrBlckTxt",
            "addrStrtTxt",
            "addrCtyTxt",
            "addrDstrctTxt",
          ]
        )
      )
    ).join(" ")
);

export const contactByTypeIdSelector = createSelector(
  registrationCompanyInformationSelector,
  (_, cntctPrsnTypId) => cntctPrsnTypId,
  (registrationCompanyInformation, cntctPrsnTypId) =>
    find(registrationCompanyInformation?.contactDtos, { cntctPrsnTypId })
);

export const clientPhoneByTypeIdSelector = createSelector(
  contactByTypeIdSelector,
  (_contact, _cntctPrsnTypId, phnTypId) => phnTypId,
  (contact, phnTypId) => find(contact?.clntPhones, { phnTypId })
);

export const authorizedPersonAddressByTypeIdSelector = createSelector(
  authorizedPersonSelector,
  (_, _clntUuid, addrTypId) => addrTypId,
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
  (_, _clntUuid, phnTypId) => phnTypId,
  (authorizedPerson, phnTypId) =>
    find(authorizedPerson?.authPrsnClntPhoneList, { phnTypId })
);

export const directorsSelector = createSelector(
  featureStateSelector,
  directorsSelectors.selectAll
);

export const directorSelector = createSelector(
  featureStateSelector,
  (_, clntUuid) => clntUuid,
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
  (_, clntUuid) => clntUuid,
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
  (_, clntUuid) => clntUuid,
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
