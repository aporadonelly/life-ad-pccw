import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import AuthPersonList from "./AuthPersonList";

const mapStateToProps = (state, ownProps) => {
  const { companyName } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AuthPersonList);
