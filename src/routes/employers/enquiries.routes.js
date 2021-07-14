import SearchEnquiry from "@pages/Employers/Enquiries/SearchEnquiry";
import SearchResult from "@pages/Employers/Enquiries/SearchResult";

const enquiriesRoutes = [
  {
    name: "Search Enquiry",
    path: "/employers/enquiries/search",
    component: SearchEnquiry,
    tab: false,
  },
  {
    name: "Search Result",
    path: "/employers/enquiries/result",
    component: SearchResult,
    tab: false,
  },
];

export default enquiriesRoutes;
