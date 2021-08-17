import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ldSrchCmpny } from "@redux/features/enrollmentEmployer/actions";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import Registration from "./Registration";

const mapStateToProps = (state, ownProps) => {
  const { companyName } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldSrchCmpny }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Registration);
