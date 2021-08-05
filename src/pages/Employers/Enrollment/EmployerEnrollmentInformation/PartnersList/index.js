import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { partnersSelector } from "@redux/features/registrationEmployer/selectors";
import PartnersList from "./PartnersList";

const mapStateToProps = (state) => ({
  partners: partnersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(PartnersList);
