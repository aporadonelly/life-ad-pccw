import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  employeeSelector,
  isLoadingSelector,
} from "@redux/features/members/selectors";
import { getSpecificMember } from "@redux/features/members/actions";
import RegistrationInformation from "./RegistrationInformation";

const mapStateToProps = (state) => ({
  employee: employeeSelector(state),
  isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getSpecificMember }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationInformation);
