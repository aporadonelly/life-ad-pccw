import SearchEnquiry from "@pages/Members/Enquiries/SearchEnquiry";
import SearchResult from "@pages/Members/Enquiries/SearchResult";

const enquiriesRoutes = [
  {
    name: "Member Search Enquiry",
    path: "/members/enquiries/search",
    component: SearchEnquiry,
    tab: false,
  },
  {
    name: "Member Search Result",
    path: "/members/enquiries/result",
    component: SearchResult,
    tab: false,
  },
];

export default enquiriesRoutes;
