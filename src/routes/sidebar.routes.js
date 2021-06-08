import {
  HomeOutlined as HomeOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon,
  BusinessOutlined as BusinessOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  BusinessCenterOutlined as BusinessCenterOutlinedIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  History as HistoryIcon,
  InfoOutlined as InfoOutlinedIcon,
} from "@material-ui/icons";

const sidebarRoutes = [
  {
    name: "task",
    path: "/task",
    icon: <HomeOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "member",
    path: "/members",
    redirect: "/members/termination",
    icon: <PeopleOutlineOutlinedIcon />,
    component: null,
  },
  {
    name: "individual",
    path: "/individual",
    icon: <PersonOutlineOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "employer",
    path: "/employers",
    redirect: "/employers/enquiry",
    icon: <BusinessCenterOutlinedIcon />,
    component: null,
  },
  {
    name: "company",
    path: "/companies",
    icon: <BusinessOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "trustee",
    path: "/trustees",
    icon: <AccountBalanceOutlinedIcon />,
    component: null,
  },
  {
    name: "transactionHistory",
    path: "/transactions",
    icon: <HistoryIcon />,
    component: null,
  },
  {
    name: "instruction",
    path: "/instructions",
    icon: <InfoOutlinedIcon />,
    component: null,
  },
  {
    name: "configuration",
    path: "/config",
    icon: <BusinessOutlinedIcon />,
    component: null,
  },
];

export default sidebarRoutes;
