import Contribution from "@pages/Employers/Contribution";
import { enrollmentEnquiriesRoutes } from "./employers";

const employersRoutes = [
  {
    name: "Enrollment Enquiries",
    path: "/employers/enquiries",
    redirect: "/employers/enquiries/search",
    children: enrollmentEnquiriesRoutes,
    tab: true,
  },
  {
    name: "Contribution",
    path: "/employers/contribution",
    component: Contribution,
    tab: true,
  },
];

export default employersRoutes;
