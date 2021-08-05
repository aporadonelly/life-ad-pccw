import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import {
  employeesSelector,
  isLoadingSelector,
  errorSelector,
  employeeSelector,
  enquirySelector,
} from "@redux/features/members/selectors";
import {
  getAllMembers,
  getSpecificMember,
  saveEnquiry,
} from "@redux/features/members/actions";
import SearchResult from "./SearchResult";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  employees: employeesSelector(state),
  employee: employeeSelector(state),
  enquiry: enquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllMembers,
      getSpecificMember,
      saveEnquiry,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
