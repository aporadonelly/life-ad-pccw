import EnquirySearch from "@pages/Members/Enquiry/EnquirySearch";
import SearchResult from "@pages/Members/Enquiry/SearchResult";
import ViewInformation from "@pages/Members/Enquiry/ViewInformation";

const enquiryRoutes = [
  {
    name: "EnquirySearch",
    path: "/members/enquiry/search",
    component: EnquirySearch,
    tab: false,
  },
  {
    name: "SearchResult",
    path: "/members/enquiry/result",
    component: SearchResult,
    tab: false,
  },
  {
    name: "ViewInformation",
    path: "/members/enquiry/information",
    component: ViewInformation,
    tab: false,
  },
];

export default enquiryRoutes;
