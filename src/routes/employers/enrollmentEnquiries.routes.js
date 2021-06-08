import EnquirySearch from "@pages/Employers/EnrollmentEnquiries/EnquirySearch";
import SearchResult from "@pages/Employers/EnrollmentEnquiries/SearchResult";

const enrollmentEnquiriesRoutes = [
  {
    name: "Enquiry Search",
    path: "/employers/enquiries/search",
    component: EnquirySearch,
    tab: false,
  },
  {
    name: "Search Result",
    path: "/employers/enquiries/result",
    component: SearchResult,
    tab: false,
  },
];

export default enrollmentEnquiriesRoutes;
