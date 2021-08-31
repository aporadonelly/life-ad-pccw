import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  employerSelector,
  contactPersonSelector,
  contactPersonClientPhoneByTypeIdSelector,
  isLoadingSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import { ldCntctPrsnInfo } from "@redux/features/enrollmentEmployer/actions";
import PayrollGroupContactPerson from "./PayrollGroupContactPerson";

const mapStateToProps = (state, ownProps) => {
  const { companyName, cntctPrsnUuid } = ownProps.match.params;
  return {
    employer: employerSelector(state, companyName),
    isLoading: isLoadingSelector(state),
    contactPerson: contactPersonSelector(state, cntctPrsnUuid),
    mobile: contactPersonClientPhoneByTypeIdSelector(
      state,
      cntctPrsnUuid,
      "TP_MB"
    ),
    telephone: contactPersonClientPhoneByTypeIdSelector(
      state,
      cntctPrsnUuid,
      "TP_TP"
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCntctPrsnInfo, push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(PayrollGroupContactPerson);
