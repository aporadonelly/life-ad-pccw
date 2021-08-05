import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
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
