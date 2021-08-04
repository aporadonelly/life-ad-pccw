import Enquiries from "@pages/Employers/Enquiries";
import Enrollment from "@pages/Employers/Enrollment";
import Registration from "@pages/Employers/Registration";

const employersRoutes = [
  {
    name: "Enquiries",
    path: "/employers/enquiries",
    component: Enquiries,
  },
  {
    name: "Enrollment",
    path: "/employers/enrollment/:companyName",
    component: Enrollment,
  },
  {
    name: "Registration",
    path: "/employers/registration/:companyName",
    component: Registration,
  },
];

export default employersRoutes;
