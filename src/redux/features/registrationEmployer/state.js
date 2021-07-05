import { createEntityAdapter } from "@reduxjs/toolkit";

export const authorizedPersonsAdapter = createEntityAdapter({
  selectId: (authorizedPerson) => authorizedPerson.clntUuid,
});

export const directorsAdapter = createEntityAdapter({
  selectId: (director) => director.clntUuid,
});

export const partnersAdapter = createEntityAdapter({
  selectId: (partner) => partner.clntUuid,
});

export const beneficialOwnersAdapter = createEntityAdapter({
  selectId: (beneficialOwner) => beneficialOwner.clntUuid,
});

export const registrationEmployer = createEntityAdapter({});

export const initialState = registrationEmployer.getInitialState({
  isLoading: false,
  error: null,
  registrationCompanyInformation: {},
  selectedClientUUID: "385CDCEB-5F17-4DE3-831A-CC222006A219".toLowerCase(),
  selectedCompanyUUID: "7732B905-E9C1-4895-959E-FDCE74C856B3".toLowerCase(),
  authorizedPersons: authorizedPersonsAdapter.getInitialState(),
  directors: directorsAdapter.getInitialState(),
  partners: partnersAdapter.getInitialState(),
  beneficialOwners: beneficialOwnersAdapter.getInitialState(),
});
