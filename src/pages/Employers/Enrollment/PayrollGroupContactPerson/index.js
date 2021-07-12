import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  contactPersonSelector,
  contactPersonClientPhoneByTypeIdSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import {
  ldCntctPrsnInfo,
  setSelectedContactPersonUUID,
} from "@redux/features/enrollmentEmployer/actions";
import PayrollGroupContactPerson from "./PayrollGroupContactPerson";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  contactPerson: contactPersonSelector(state),
  mobile: contactPersonClientPhoneByTypeIdSelector(state, "TP_MB"),
  telephone: contactPersonClientPhoneByTypeIdSelector(state, "TP_TP"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { ldCntctPrsnInfo, setSelectedContactPersonUUID, push },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayrollGroupContactPerson);
