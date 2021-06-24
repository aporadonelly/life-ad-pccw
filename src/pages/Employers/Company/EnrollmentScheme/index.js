import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { schemesSelector } from "@redux/features/registrationEmployer/selectors";

import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state) => ({
  schemes: schemesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentScheme);
