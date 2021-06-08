import CompanyRegistrationInformation from "@pages/Employers/Company/CompanyRegistrationInformation";
import EnrollmentScheme from "@pages/Employers/Company/EnrollmentScheme";

const enrollmentEnquiriesRoutes = [
  {
    name: "Company Registration Information",
    path: "/employers/company/reg-info",
    component: CompanyRegistrationInformation,
    tab: true,
  },
  {
    name: "Enrollment Scheme",
    path: "/employers/company/enrollment-scheme",
    component: EnrollmentScheme,
    tab: true,
  },
];

export default enrollmentEnquiriesRoutes;
