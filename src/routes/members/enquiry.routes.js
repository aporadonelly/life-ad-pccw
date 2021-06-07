import Search from "@pages/Members/Enquiry/Search";
import Result from "@pages/Members/Enquiry/Result";
import Information from "@pages/Members/Enquiry/Information";

const enquiryRoutes = [
  {
    name: "Search",
    path: "/members/enquiry/search",
    component: Search,
    tab: false,
  },
  {
    name: "Result",
    path: "/members/enquiry/result",
    component: Result,
    tab: false,
  },
  {
    name: "Information",
    path: "/members/enquiry/information",
    component: Information,
    tab: false,
  },
];

export default enquiryRoutes;
