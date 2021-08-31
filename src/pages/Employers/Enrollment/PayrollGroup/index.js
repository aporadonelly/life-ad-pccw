import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  employerSelector,
  employerSchemeSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  ldPayrollGrpInfo,
  ldCntctPrsnInfo,
  getGradeLst,
} from "@redux/features/enrollmentEmployer/actions";
import PayrollGroup from "./PayrollGroup";

const mapStateToProps = (state, ownProps) => {
  const { companyName, schmUuid } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
    scheme: employerSchemeSelector(state, companyName, schmUuid),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { ldPayrollGrpInfo, ldCntctPrsnInfo, getGradeLst, push },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(PayrollGroup);
