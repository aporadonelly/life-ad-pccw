import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  draftEnquiry,
  ldEnrCmpnyInfo,
  getPayrollGrpList,
  getCRSFormLst,
} from "@redux/features/enrollmentEmployer/actions";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import { isLoadingSelector } from "@redux/features/enrollmentEmployer/selectors";
import EmployerEnrollmentInformation from "./EmployerEnrollmentInformation";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      push,
      draftEnquiry,
      ldEnrCmpnyInfo,
      ldCmpnyRltdPrsn,
      getPayrollGrpList,
      getCRSFormLst,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployerEnrollmentInformation);
