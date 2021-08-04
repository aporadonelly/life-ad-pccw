import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "connected-react-router";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  directorSelector,
  directorAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import Director from "./Director";

const mapStateToProps = (state, ownProps) => {
  const cntctPrsnUuid = ownProps.match.params.cntctPrsnUuid;
  return {
    director: directorSelector(state, cntctPrsnUuid),
    residentialAddress: directorAddressByTypeIdSelector(
      state,
      cntctPrsnUuid,
      "AD_R"
    ),
    customTypes: customTypesEntitiesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCmpnyRltdPrsn, push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Director);
