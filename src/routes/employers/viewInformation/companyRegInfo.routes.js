import CompanyRegistrationInformation from "@pages/Employers/ViewInformation/CompanyInformation/CompanyRegistrationInformation";
import EnrollmentScheme from "@pages/Employers/ViewInformation/CompanyInformation/EnrollmentScheme";

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
