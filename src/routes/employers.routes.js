import Contribution from "@pages/Employers/Contribution";
import { companyRoutes, enrollmentEnquiriesRoutes } from "./employers";

const employersRoutes = [
  {
    name: "ER Registration / Enrollment Enquiries",
    path: "/employers/enquiry",
    redirect: "/employers/enquiry/search",
    children: enrollmentEnquiriesRoutes,
    tab: true,
  },
  {
    name: "Contribution",
    path: "/employers/contribution",
    component: Contribution,
    tab: true,
  },
  {
    name: "Company",
    path: "/employers/company",
    children: companyRoutes,
    tab: false,
  },
];

export default employersRoutes;
