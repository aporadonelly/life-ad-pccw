import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { ldEnrCmpnyInfo } from "@redux/features/enrollmentEmployer/actions";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import EmployerEnrollmentInformation from "./EmployerEnrollmentInformation";

const mapStateToProps = (state) => ({
  enrCompanyInfo: enrCompanyInfoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, ldEnrCmpnyInfo }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployerEnrollmentInformation);
