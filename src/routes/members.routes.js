const membersRoutes = [
  {
    name: "Enquiry",
    path: "/members/enquiry",
    component: null,
  },
  {
    name: "Termination",
    path: "/members/termination",
    redirect: "/members/termination/future-investment",
    component: null,
    children: [
      {
        name: "Future Investment Instruction",
        path: "/members/termination/future-investment",
        component: null,
      },
    ],
  },
];

export default membersRoutes;
