import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  customTypeByGroupIdSelector,
  countriesSelector,
} from "@redux/features/system/selectors";
import {
  isLoadingSelector,
  errorSelector,
  employeesSelector,
  enquirySelector,
} from "@redux/features/members/selectors";
import { getAllMembers, saveEnquiry } from "@redux/features/members/actions";

import MemberSearch from "./MemberSearch";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  gender: customTypeByGroupIdSelector(state, "GD"),
  idType: customTypeByGroupIdSelector(state, "ID"),
  nationality: customTypeByGroupIdSelector(state, "NTN"),
  placeOfBirth: countriesSelector(state),
  employeeType: customTypeByGroupIdSelector(state, "EP"),
  industryType: customTypeByGroupIdSelector(state, "NT"),
  occupation: customTypeByGroupIdSelector(state, "MB"),
  schemeType: customTypeByGroupIdSelector(state, "SC"),
  status: customTypeByGroupIdSelector(state, "ST"),
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

export default connect(mapStateToProps, mapDispatchToProps)(MemberSearch);
