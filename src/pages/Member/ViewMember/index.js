import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { employeeSelector } from "@redux/features/members/selectors";
import { getSpecificMember } from "@redux/features/members/actions";
import ViewMember from "./ViewMember";

const mapStateToProps = (state) => ({
  employee: employeeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getSpecificMember }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMember);
