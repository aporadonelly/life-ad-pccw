export const getGenderCollection = () => [
  { cstmTypId: "GT_M", title: "Male" },
  { cstmTypId: "GT_F", title: "Female" },
  { cstmTypId: "GT_B", title: "Both" },
];

export const idTypes = () => [
  { id: "hkid", title: "HKID" },
  { id: "twid", title: "TWID" },
];

export const nationality = () => [
  { id: "chinese", title: "Chinese" },
  { id: "taiwanese", title: "Taiwanese" },
];

export const placeOfBirth = () => [
  { id: "china", title: "China" },
  { id: "Hong Kong", title: "Hong Kong" },
];

export const employeeType = () => [
  { id: "reg", title: "Regular" },
  { id: "pt", title: "Part Time" },
];

export const reportedIndustryType = () => [
  { id: "bpo", title: "BPO" },
  { id: "it", title: "IT" },
];

export const occupation = () => [
  { id: "manager", title: "Manager" },
  { id: "staff", title: "Staff" },
];

export const mpfSchemeName = () => [
  { id: "retire", title: "Retirement Fund" },
  { id: "plus", title: "Plus Fund" },
  { id: "aggressive", title: "Aggressive Fund" },
];

export const status = () => [
  { id: "active", title: "Active" },
  { id: "inactive", title: "Inactive" },
];

// added mock data from life-99
const KEYS = {
  employees: "employees",
  employeeId: "mpf_id",
};

export const getTerminationReasonList = () => [
  { cstmTypId: "brkRules", cstmTypDtlTxt: "Breaking Company Rules" },
  { cstmTypId: "incompetence", cstmTypDtlTxt: "Poor quality of work" },
  { cstmTypId: "tardiness", cstmTypDtlTxt: "Tardiness" },
];

export const getScheme_LSP_SP_offect_sequence = () => [
  {
    changeDate: "",
    effectiveDate: "2021-04-23T03:44:16.000+00:00",
    schemeId: "79cef4fb-4fb8-4530-a98e-909042525776",
    schemeName: "SCHEME1",
    schemeNumber: 1,
    schemeType: "",

    // schemeId: "LSP_SP_1",
    // schemeName: "SUN MPF Scheme",
  },
  // {
  //   schemeId: "LSP_SP_2",
  //   schemeName: "HSBC MPF Scheme",
  // },
  // {
  //   schemeId: "LSP_SP_3",
  //   schemeName: "AIA MPF Scheme",
  // },
  // {
  //   schemeId: "LSP_SP_4",
  //   schemeName: "China Life MPF Master Trust Scheme",
  // },
];

export const getScheme_per_Employee = () => [
  {
    id: "1",
    name: "1st scheme",
    value: "LSP_SP_5",
  },
  {
    id: "2",
    name: "2nd scheme",
    value: "LSP_SP_4",
  },
  {
    id: "3",
    name: "3rd scheme",
    value: "LSP_SP_3",
  },
  {
    id: "4",
    name: "4th scheme",
    value: "LSP_SP_1",
  },
];

export const getCurrency = () => [
  { cstmTypId: "$USD", cstmTypDtlTxt: "$ US Dollar" },
  { cstmTypId: "JPY", cstmTypDtlTxt: "Yen" },
  { cstmTypId: "HKD$", cstmTypDtlTxt: "$HKD" },
];

export const getEntitle_LSP_SP_items = () => [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

export const getLSP_SP_items = () => [
  { value: "LS_LSP", label: "LSP" },
  { value: "LS_SP", label: "SP" },
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}
