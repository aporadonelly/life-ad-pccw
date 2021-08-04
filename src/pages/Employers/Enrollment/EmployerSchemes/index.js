import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { employerSchemesSelector } from "@redux/features/enrollmentEmployer/selectors";
import EnrollmentScheme from "./EnrollmentScheme";

const mapStateToProps = (state, ownProps) => {
  const { companyName } = ownProps.match.params;
  return {
    schemes: employerSchemesSelector(state, companyName),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(EnrollmentScheme);
