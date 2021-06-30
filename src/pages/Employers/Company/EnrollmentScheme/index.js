import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  employerSchemesSelector,
  employerSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  setSelectedCompanyUUID,
  setSelectedSchemeUUID,
} from "@redux/features/enrollmentEmployer/actions";

import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state) => ({
  schemes: employerSchemesSelector(state),
  employer: employerSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { push, setSelectedCompanyUUID, setSelectedSchemeUUID },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentScheme);
