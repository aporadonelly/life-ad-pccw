import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  employerSelector,
  employerSchemesSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  setSelectedCompanyUUID,
  setSelectedSchemeUUID,
} from "@redux/features/enrollmentEmployer/actions";
import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state) => ({
  employer: employerSelector(state),
  schemes: employerSchemesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { push, setSelectedCompanyUUID, setSelectedSchemeUUID },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentScheme);
