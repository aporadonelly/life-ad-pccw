import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { beneficialOwnersSelector } from "@redux/features/registrationEmployer/selectors";
import BeneficialOwnerList from "./BeneficialOwnerList";

const mapStateToProps = (state) => ({
  beneficialOwners: beneficialOwnersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(BeneficialOwnerList);
