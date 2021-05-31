import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  employeesSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/members/selectors";
import {
  getAllMembers,
  getSpecificMember,
} from "@redux/features/members/actions";
import Members from "./Members";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  employees: employeesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllMembers,
      getSpecificMember,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
