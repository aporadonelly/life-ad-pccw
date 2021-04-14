const KEYS = {
  employees: 'employees',
  employeeId: 'mpf_id',
};

export const getGenderCollection = () => [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export const idTypes = () => [
  { value: 'hkid', label: 'HKID' },
  { value: 'hkid2', label: 'HKID2' },
];

export const nationality = () => [
  { value: 'chinese', label: 'Chinese' },
  { value: 'taiwanese', label: 'Taiwanese' },
];

export const placeOfBirth = () => [
  { value: 'china', label: 'China' },
  { value: 'taiwan', label: 'Taiwan' },
];

export const employeeType = () => [
  { value: 'reg', label: 'Regular' },
  { value: 'pt', label: 'Part Time' },
];

export const reportedIndustryType = () => [
  { value: 'bpo', label: 'BPO' },
  { value: 'it', label: 'IT' },
];

export const occupation = () => [
  { value: 'manager', label: 'Manager' },
  { value: 'staff', label: 'Staff' },
];

export const mpfSchemeName = () => [
  { value: 'retirement', label: 'Retirement Fund' },
  { value: 'plus', label: 'Plus Fund' },
  { value: 'aggressive', label: 'Aggressive Fund' },
];

export const status = () => [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
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
