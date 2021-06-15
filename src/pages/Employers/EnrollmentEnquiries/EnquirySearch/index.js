import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { customTypeByGroupIdSelector } from "@redux/features/system/selectors";
import {
  isLoadingSelector,
  errorSelector,
  enquirySelector,
} from "@redux/features/employers/selectors";
import { getEmployers } from "@redux/features/employers/actions";

import EnquirySearch from "./EnquirySearch";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  enquiry: enquirySelector(state),
  error: errorSelector(state),
  industryType: customTypeByGroupIdSelector(state, "NT"),
  registrationType: customTypeByGroupIdSelector(state, "CI"),
  typesOfCompany: customTypeByGroupIdSelector(state, "CP"),
  enrolmentStatus: customTypeByGroupIdSelector(state, "ST"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getEmployers,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquirySearch);
