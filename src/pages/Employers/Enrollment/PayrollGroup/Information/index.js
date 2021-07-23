import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { payrollGrpInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import { ldPayrollGrpInfo } from "@redux/features/enrollmentEmployer/actions";
import Information from "./Information";

const mapStateToProps = (state) => ({
  payrollGrpInfo: payrollGrpInfoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, ldPayrollGrpInfo }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
