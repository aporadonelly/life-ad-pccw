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
    name: "Task",
    path: "/task",
    icon: <HomeOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "Member",
    path: "/members",
    redirect: "/members/enquiry",
    icon: <PeopleOutlineOutlinedIcon />,
    component: null,
  },
  {
    name: "Individual",
    path: "/individual",
    icon: <PersonOutlineOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "Employer",
    path: "/employers",
    icon: <BusinessCenterOutlinedIcon />,
    component: null,
  },
  {
    name: "Company",
    path: "/companies",
    icon: <BusinessOutlinedIcon />,
    component: null,
  },
  {
    divider: true,
  },
  {
    name: "Trustee",
    path: "/trustees",
    icon: <AccountBalanceOutlinedIcon />,
    component: null,
  },
  {
    name: "Transaction History",
    path: "/transactions",
    icon: <HistoryIcon />,
    component: null,
  },
  {
    name: "Instruction",
    path: "/instructions",
    icon: <InfoOutlinedIcon />,
    component: null,
  },
  {
    name: "Configuration",
    path: "/config",
    icon: <BusinessOutlinedIcon />,
    component: null,
  },
];

export default sidebarRoutes;
