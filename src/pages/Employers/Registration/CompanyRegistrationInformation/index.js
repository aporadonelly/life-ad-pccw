import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { ldRegCmpnyInfoforAdmnPrtl } from "@redux/features/registrationEmployer/actions";
import {
  registrationCompanyInformationSelector,
  contactByTypeIdSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/registrationEmployer/selectors";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import CompanyRegistrationInformation from "./CompanyRegistrationInformation";

const mapStateToProps = (state, ownProps) => {
  const { companyName } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
    contact: contactByTypeIdSelector(state, "CT_SCP"),
    isLoading: isLoadingSelector(state),
    error: errorSelector(state),
    companyRegInfo: registrationCompanyInformationSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldRegCmpnyInfoforAdmnPrtl, push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(CompanyRegistrationInformation);
