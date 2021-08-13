import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import DirectorsList from "./DirectorsList";

const mapStateToProps = (state) => ({
  directors: directorsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DirectorsList);
