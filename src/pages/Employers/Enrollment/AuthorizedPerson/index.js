import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  authorizedPersonSelector,
  authorizedPersonAddressByTypeIdSelector,
  authorizedPersonPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import AuthorizedPerson from "./AuthorizedPerson";

const mapStateToProps = (state, ownProps) => {
  const { clntUuid } = ownProps.match.params;
  return {
    authorizedPerson: authorizedPersonSelector(state, clntUuid),
    telephone: authorizedPersonPhoneByTypeIdSelector(state, clntUuid, "TP_TP"),
    mobile: authorizedPersonPhoneByTypeIdSelector(state, clntUuid, "TP_MB"),
    residentialAddress: authorizedPersonAddressByTypeIdSelector(
      state,
      clntUuid,
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
