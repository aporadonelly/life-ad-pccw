import { PageHeader } from "@components/layout";

<PageHeader subjectInfo={{ firstName: "" }} routes={routes} />;

const routes = [
  {
    name: "Enrollment",
    path: "/employer/enrollment",
    component: null,
  },
  {
    name: "Investment",
    path: "/employer/investment",
    component: null,
  },
  {
    name: "Termination",
    path: "/employer/termination",
    component: null,
  },
  {
    name: "Claims",
    path: "/employer/claims",
    component: null,
  },
  {
    name: "Transfers",
    path: "/employer/transfers",
    component: null,
  },
  // {
  //   name: "Investment",
  //   path: "/employer/investment",
  //   component: null,
  //   children: [
  //     {
  //       name: "Future Investment Instruction",
  //       path: "/employer/investment/future-investment",
  //       component: null,
  //     },
  //     {
  //       name: "Fund Switching / Re-balancing",
  //       path: "/employer/investment/fund-switching",
  //       component: null,
  //     },
  //   ],
  // },
];
