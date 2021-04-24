const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getGenderCollection = () => [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];

export const idTypes = () => [
  { id: 'hkid', title: 'HKID' },
  { id: 'hkid2', title: 'HKID2' },
];

export const nationality = () => [
  { id: 'chinese', title: 'Chinese' },
  { id: 'taiwanese', title: 'Taiwanese' },
];

export const placeOfBirth = () => [
  { id: 'china', title: 'China' },
  { id: 'taiwan', title: 'Taiwan' },
];

export const employeeType = () => [
  { id: 'reg', title: 'Regular' },
  { id: 'pt', title: 'Part Time' },
];

export const reportedIndustryType = () => [
  { id: 'bpo', title: 'BPO' },
  { id: 'it', title: 'IT' },
];

export const occupation = () => [
  { id: 'manager', title: 'Manager' },
  { id: 'staff', title: 'Staff' },
];

export const mpfSchemeName = () => [
  { id: 'retirement', title: 'Retirement Fund' },
  { id: 'plus', title: 'Plus Fund' },
  { id: 'aggressive', title: 'Aggressive Fund' },
];

export const status = () => [
  { id: 'active', title: 'Active' },
  { id: 'inactive', title: 'Inactive' },
];
