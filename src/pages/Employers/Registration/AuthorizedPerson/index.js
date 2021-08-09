import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  authorizedPersonSelector,
  authorizedPersonAddressByTypeIdSelector,
  authorizedPersonPhoneByTypeIdSelector,
  isLoadingSelector,
} from "@redux/features/registrationEmployer/selectors";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import AuthorizedPerson from "./AuthorizedPerson";

const mapStateToProps = (state, ownProps) => {
  const { companyName, clntUuid } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
    authorizedPerson: authorizedPersonSelector(state, clntUuid),
    telephone: authorizedPersonPhoneByTypeIdSelector(state, clntUuid, "TP_TP"),
    mobile: authorizedPersonPhoneByTypeIdSelector(state, clntUuid, "TP_MB"),
    residentialAddress: authorizedPersonAddressByTypeIdSelector(
      state,
      clntUuid,
      "AD_R"
    ),
    businessAddress: authorizedPersonAddressByTypeIdSelector(
      state,
      clntUuid,
      "AD_B"
    ),
    correspondenceAddress: authorizedPersonAddressByTypeIdSelector(
      state,
      clntUuid,
      "AD_C"
    ),
    isLoading: isLoadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCmpnyRltdPrsn }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AuthorizedPerson);
