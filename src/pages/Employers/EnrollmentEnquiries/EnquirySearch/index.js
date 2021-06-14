import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { customTypeByGroupIdSelector } from "@redux/features/system/selectors";
import {
  isLoadingSelector,
  errorSelector,
  employeesSelector,
  enquirySelector,
} from "@redux/features/members/selectors";
import { getAllMembers, saveEnquiry } from "@redux/features/members/actions";

import EnquirySearch from "./EnquirySearch";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  industryType: customTypeByGroupIdSelector(state, "NT"),
  registrationType: customTypeByGroupIdSelector(state, "CI"),
  typesOfCompany: customTypeByGroupIdSelector(state, "CP"),
  enrolmentStatus: customTypeByGroupIdSelector(state, "ST"),
  employees: employeesSelector(state),
  enquiry: enquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllMembers,
      saveEnquiry,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquirySearch);
