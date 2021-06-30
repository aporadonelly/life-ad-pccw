import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  schemesSelector,
  employerSelector,
} from "@redux/features/enrollmentEmployer/selectors";

import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state) => ({
  schemes: schemesSelector(state),
  employer: employerSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentScheme);
