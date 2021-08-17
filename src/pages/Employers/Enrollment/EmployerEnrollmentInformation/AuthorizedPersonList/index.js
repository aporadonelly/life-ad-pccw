import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { authorizedPersonsSelector } from "@redux/features/registrationEmployer/selectors";
import AuthorizedPersonList from "./AuthorizedPersonList";

const mapStateToProps = (state) => ({
  authorizedPersons: authorizedPersonsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AuthorizedPersonList);
