import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { ldEnrCmpnyInfo } from "@redux/features/enrollmentEmployer/actions";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import EmployerEnrollmentInformation from "./EmployerEnrollmentInformation";

// const mapStateToProps = (state) => ({
//   enrCompanyInfo: enrCompanyInfoSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, ldEnrCmpnyInfo, ldCmpnyRltdPrsn }, dispatch),
});

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(EmployerEnrollmentInformation);
