import Task from "@pages/Task";
import membersRoutes from "./members.routes";
import employersRoutes from "./employers.routes";
import dataModificationRoutes from "./dataModification.routes";

const appRoutes = [
  {
    name: "Task",
    path: "/",
    exact: true,
    component: Task,
    tab: false,
  },
  {
    name: "Data Modification",
    path: "/data-modification",
    exact: true,
    children: dataModificationRoutes,
    tab: false,
  },
  {
    name: "Member",
    path: "/members",
    children: membersRoutes,
    tab: false,
  },
  // {
  //   name: "Individual",
  //   path: "/individual",
  //   component: null,
  //   tab: false,
  // },
  {
    name: "Employer",
    path: "/employers",
    children: employersRoutes,
    tab: false,
  },
  // {
  //   name: "Company",
  //   path: "/companies",
  //   component: null,
  //   tab: false,
  // },
  // {
  //   name: "Trustee",
  //   path: "/trustees",
  //   component: null,
  //   tab: false,
  // },
  // {
  //   name: "Transaction History",
  //   path: "/transactions",
  //   component: null,
  //   tab: false,
  // },
  // {
  //   name: "Instruction",
  //   path: "/instructions",
  //   component: null,
  //   tab: false,
  // },
  // {
  //   name: "Configuration",
  //   path: "/config",
  //   component: null,
  //   tab: false,
  // },
];

export default appRoutes;
