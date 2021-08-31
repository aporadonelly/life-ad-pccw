import CompanyRegistrationInformation from "@pages/Employers/Registration/CompanyRegistrationInformation";
import AuthorizedPerson from "@pages/Employers/Registration/AuthorizedPerson";

const registrationRoutes = [
  {
    name: "Company Registration Information",
    path: "/employers/registration/:companyName/information",
    component: CompanyRegistrationInformation,
    tab: false,
  },
  {
    name: "Employer Registration Authorized Person",
    path: "/employers/registration/:companyName/authorized-person/:clntUuid",
    component: AuthorizedPerson,
    tab: false,
  },
];

export default registrationRoutes;
