import EnrollmentScheme from "@pages/Employers/Company/EnrollmentScheme";
import EmployerEnrollmentInformation from "@pages/Employers/Company/EmployerEnrollmentInformation";
import { companyRegInfoRoutes } from "./company";

const enrollmentEnquiriesRoutes = [
  {
    name: "Company Registration Information",
    path: "/employers/company/reg-info",
    redirect: "/employers/company/reg-info/registry",
    children: companyRegInfoRoutes,
    tab: true,
  },
  {
    name: "Enrollment Scheme",
    path: "/employers/company/enrollment-scheme",
    component: EnrollmentScheme,
    tab: false,
  },
  {
    name: "Employer Enrollment Information",
    path: "/employers/company/er-enrollment-info",
    component: EmployerEnrollmentInformation,
    tab: true,
  },
];

export default enrollmentEnquiriesRoutes;
