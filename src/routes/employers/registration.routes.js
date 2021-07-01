import CompanyRegistrationInformation from "@pages/Employers/Registration/CompanyRegistrationInformation";
import AuthorizedPerson from "@pages/Employers/Registration/AuthorizedPerson";

const registrationRoutes = [
  {
    name: "CompanyRegistrationInformation",
    path: "/employers/registration/information",
    component: CompanyRegistrationInformation,
    tab: false,
  },
  {
    name: "Authorized Person",
    path: "/employers/registration/authorized-person",
    component: AuthorizedPerson,
    tab: false,
  },
];

export default registrationRoutes;
