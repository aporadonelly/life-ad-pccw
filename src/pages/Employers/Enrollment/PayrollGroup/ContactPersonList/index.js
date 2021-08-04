import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { contactPersonsSelector } from "@redux/features/enrollmentEmployer/selectors";

import ContactPersonList from "./ContactPersonList";

const mapStateToProps = (state, ownProps) => ({
  contactPersons: contactPersonsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(ContactPersonList);
