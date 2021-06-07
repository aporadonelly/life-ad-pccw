import Members from "@pages/Members";

const appRoutes = [
  {
    name: "Task",
    path: "/task",
    component: null,
    tab: false,
  },
  {
    name: "Member",
    path: "/members",
    component: Members,
    tab: false,
  },
  {
    name: "Individual",
    path: "/individual",
    component: null,
    tab: false,
  },
  {
    name: "Employer",
    path: "/employers",
    component: null,
    tab: false,
  },
  {
    name: "Company",
    path: "/companies",
    component: null,
    tab: false,
  },
  {
    name: "Trustee",
    path: "/trustees",
    component: null,
    tab: false,
  },
  {
    name: "Transaction History",
    path: "/transactions",
    component: null,
    tab: false,
  },
  {
    name: "Instruction",
    path: "/instructions",
    component: null,
    tab: false,
  },
  {
    name: "Configuration",
    path: "/config",
    component: null,
    tab: false,
  },
];

export default appRoutes;
