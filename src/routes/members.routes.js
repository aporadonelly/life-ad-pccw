import Enquiry from "@pages/Members/Enquiry";
import Enrollment from "@pages/Members/Enrollment";
import Investment from "@pages/Members/Investment";
import Termination from "@pages/Members/Termination";
import Claims from "@pages/Members/Claims";
import Transfers from "@pages/Members/Transfers";

const membersRoutes = [
  {
    name: "Enrollment",
    path: "/members/enrollment",
    component: Enrollment,
    tab: true,
  },
  {
    name: "Investment",
    path: "/members/investment",
    component: Investment,
    tab: true,
  },
  {
    name: "Termination",
    path: "/members/termination/:id",
    redirect: "/members/termination",
    component: Termination,
    tab: true,
  },
  {
    name: "Claims",
    path: "/members/claims",
    component: Claims,
    tab: true,
  },
  {
    name: "Transfers",
    path: "/members/transfers",
    component: Transfers,
    tab: true,
  },
  {
    name: "Enquiry",
    path: "/members/enquiry",
    component: Enquiry,
    tab: false,
  },
];

export default membersRoutes;
