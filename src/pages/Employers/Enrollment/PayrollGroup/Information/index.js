import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "@redux/helpers";
import { payrollGrpInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import Information from "./Information";

const mapStateToProps = (state) => ({
  payrollGrpInfo: payrollGrpInfoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
