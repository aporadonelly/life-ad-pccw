import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { payrollGroupListSelector } from "@redux/features/enrollmentEmployer/selectors";
import PayrollGroupList from "./PayrollGroupList";

const mapStateToProps = (state) => ({
  payrollGroupList: payrollGroupListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(PayrollGroupList);
