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
  selectedClientUUID: "ac0238a5-99ad-4b5d-b2dd-17de7728ac8c",
  selectedCompanyUUID: "385cdceb-5f17-4de3-831a-cc222006a219",
  authorizedPersons: authorizedPersonsAdapter.getInitialState(),
  directors: directorsAdapter.getInitialState(),
  partners: partnersAdapter.getInitialState(),
  beneficialOwners: beneficialOwnersAdapter.getInitialState(),
});
