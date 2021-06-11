import EnquirySearch from "@pages/Employers/EnrollmentEnquiries/EnquirySearch";
import SearchResult from "@pages/Employers/EnrollmentEnquiries/SearchResult";

const enrollmentEnquiriesRoutes = [
  {
    name: "Enquiry Search",
    path: "/employers/enquiry/search",
    component: EnquirySearch,
    tab: false,
  },
  {
    name: "Search Result",
    path: "/employers/enquiry/result",
    component: SearchResult,
    tab: false,
  },
];

export default enrollmentEnquiriesRoutes;
