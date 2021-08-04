import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "connected-react-router";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  partnerSelector,
  partnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import Partner from "./Partner";

const mapStateToProps = (state, ownProps) => {
  const cntctPrsnUuid = ownProps.match.params.cntctPrsnUuid;
  return {
    partner: partnerSelector(state, cntctPrsnUuid),
    residentialAddress: partnerAddressByTypeIdSelector(
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

export default compose(withRouter, withConnect)(Partner);
