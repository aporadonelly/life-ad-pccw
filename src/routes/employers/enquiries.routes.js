import SearchEnquiry from "@pages/Employers/Enquiries/SearchEnquiry";
import SearchResult from "@pages/Employers/Enquiries/SearchResult";

const enquiriesRoutes = [
  {
    name: "Employer Search Enquiry",
    path: "/employers/enquiries/search",
    component: SearchEnquiry,
    tab: false,
  },
  {
    name: "Employer Search Result",
    path: "/employers/enquiries/result",
    component: SearchResult,
    tab: false,
  },
];

export default enquiriesRoutes;
