import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "connected-react-router";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  authorizedPersonSelector,
  authorizedPersonAddressByTypeIdSelector,
  authorizedPersonPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import AuthorizedPerson from "./AuthorizedPerson";

const mapStateToProps = (state, ownProps) => {
  const cntctPrsnUuid = ownProps.match.params.cntctPrsnUuid;
  return {
    authorizedPerson: authorizedPersonSelector(state, cntctPrsnUuid),
    telephone: authorizedPersonPhoneByTypeIdSelector(
      state,
      cntctPrsnUuid,
      "TP_TP"
    ),
    mobile: authorizedPersonPhoneByTypeIdSelector(
      state,
      cntctPrsnUuid,
      "TP_MB"
    ),
    residentialAddress: authorizedPersonAddressByTypeIdSelector(
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

export default compose(withRouter, withConnect)(AuthorizedPerson);
