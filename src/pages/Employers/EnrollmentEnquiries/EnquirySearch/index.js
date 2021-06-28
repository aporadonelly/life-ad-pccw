import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { customTypeByGroupIdSelector } from "@redux/features/system/selectors";
import {
  isLoadingSelector,
  errorSelector,
  draftEnquirySelector,
  schemesSelector,
  trusteesSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  ldSrchCmpny,
  draftEnquiry,
} from "@redux/features/enrollmentEmployer/actions";

import EnquirySearch from "./EnquirySearch";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  enquiry: draftEnquirySelector(state),
  error: errorSelector(state),
  schemes: schemesSelector(state),
  trustees: trusteesSelector(state),
  industryType: customTypeByGroupIdSelector(state, "NT"),
  registrationType: customTypeByGroupIdSelector(state, "CI"),
  typesOfCompany: customTypeByGroupIdSelector(state, "CP"),
  // enrolmentStatus: customTypeByGroupIdSelector(state, "ST"),
  // registrationStatus: customTypeByGroupIdSelector(state, "ST"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ldSrchCmpny,
      draftEnquiry,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquirySearch);
