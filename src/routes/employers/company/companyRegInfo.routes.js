import Registry from "@pages/Employers/Company/CompanyRegistrationInformation/Registry";
import AuthorizedPerson from "@pages/Employers/Company/CompanyRegistrationInformation/AuthorizedPerson";

const companyRegInfoRoutes = [
  {
    name: "Registry",
    path: "/employers/company/reg-info/registry",
    component: Registry,
    tab: false,
  },
  {
    name: "Authorized Person",
    path: "/employers/company/reg-info/authorized",
    component: AuthorizedPerson,
    tab: false,
  },
];

export default companyRegInfoRoutes;
