const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getGenderCollection = () => [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
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
  { id: 'pending', title: 'Pending' },
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, '0');
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}
