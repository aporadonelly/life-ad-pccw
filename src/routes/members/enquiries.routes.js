import SearchEnquiry from "@pages/Members/Enquiries/SearchEnquiry";
import SearchResult from "@pages/Members/Enquiries/SearchResult";
import RegistrationInformation from "@pages/Members/Enquiries/RegistrationInformation";
import AccountTypes from "@pages/Members/Enquiries/AccountTypes";

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
  {
    name: "Member Registration Information",
    path: "/members/enquiries/:pnsnIdTxt/registration",
    component: RegistrationInformation,
    tab: false,
  },
  {
    name: "Member Account Types",
    path: "/members/enquiries/:pnsnIdTxt/account-types",
    component: AccountTypes,
    tab: false,
  },
];

export default enquiriesRoutes;
