import { connect } from "react-redux";
import {
  enrContactByTypeIdSelector,
  clientPhoneByTypeIdSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import SecondaryContactPerson from "./SecondaryContactPerson";

const mapStateToProps = (state) => ({
  contactPerson: enrContactByTypeIdSelector(state, "CT_SCP"),
  telephoneNo: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_TP"),
  mobileNo: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_MB"),
});

export default connect(mapStateToProps, null)(SecondaryContactPerson);
