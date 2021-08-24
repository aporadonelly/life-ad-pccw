// import Enrollment from "@pages/Members/Enrollment";
// import Investment from "@pages/Members/Investment";
// import Termination from "@pages/Members/Termination";
// import Claims from "@pages/Members/Claims";
// import Transfers from "@pages/Members/Transfers";
// import { enquiryRoutes } from "./members";
import Enquiries from "@pages/Members/Enquiries";

const membersRoutes = [
  // {
  //   name: "Enrollment",
  //   path: "/members/enrollment",
  //   component: Enrollment,
  //   tab: true,
  // },
  // {
  //   name: "Investment",
  //   path: "/members/investment",
  //   component: Investment,
  //   tab: true,
  // },
  // {
  //   name: "Termination",
  //   path: "/members/termination/:id",
  //   component: Termination,
  //   tab: true,
  // },
  // {
  //   name: "Claims",
  //   path: "/members/claims",
  //   component: Claims,
  //   tab: true,
  // },
  // {
  //   name: "Transfers",
  //   path: "/members/transfers",
  //   component: Transfers,
  //   tab: true,
  // },
  {
    name: "Enquiries",
    path: "/members/enquiries",
    component: Enquiries,
    tab: false,
  },
];

export default membersRoutes;
