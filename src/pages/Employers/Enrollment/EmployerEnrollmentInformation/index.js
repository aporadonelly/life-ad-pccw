import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  ldEnrCmpnyInfo,
  getPayrollGrpList,
  getCRSFormLst,
} from "@redux/features/enrollmentEmployer/actions";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import {
  employerSelector,
  employerSchemeSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import EmployerEnrollmentInformation from "./EmployerEnrollmentInformation";

const mapStateToProps = (state, ownProps) => {
  const { companyName, schmUuid } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
    scheme: employerSchemeSelector(state, companyName, schmUuid),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      push,
      ldEnrCmpnyInfo,
      ldCmpnyRltdPrsn,
      getPayrollGrpList,
      getCRSFormLst,
    },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(EmployerEnrollmentInformation);
