import { connect } from "react-redux";
import { payrollGroupListSelector } from "@redux/features/enrollmentEmployer/selectors";

import PayrollGroupList from "./PayrollGroupList";

const mapStateToProps = (state) => ({
  payrollGroupsList: payrollGroupListSelector(state),
});

export default connect(mapStateToProps, null)(PayrollGroupList);
