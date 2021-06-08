import CompanyRegistrationInformation from "@pages/Employers/ViewInformation/CompanyRegistrationInformation";
import EnrollmentScheme from "@pages/Employers/ViewInformation/EnrollmentScheme";

const viewInformationRoutes = [
  {
    name: "Company Registration Information",
    path: "/employers/information/company-reg-info",
    component: CompanyRegistrationInformation,
    tab: true,
  },
  {
    name: "Enrollment Scheme",
    path: "/employers/information/enrollment-scheme",
    component: EnrollmentScheme,
    tab: true,
  },
];

export default viewInformationRoutes;
