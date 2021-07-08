import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { employerSchemesSelector } from "@redux/features/enrollmentEmployer/selectors";
import {
  setSelectedEmployerUUID,
  setSelectedSchemeUUID,
} from "@redux/features/enrollmentEmployer/actions";
import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state) => ({
  schemes: employerSchemesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { push, setSelectedEmployerUUID, setSelectedSchemeUUID },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentScheme);
