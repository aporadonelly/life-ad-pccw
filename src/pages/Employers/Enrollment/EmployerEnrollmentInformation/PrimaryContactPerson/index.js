import { connect } from "react-redux";
import {
  enrContactByTypeIdSelector,
  clientPhoneByTypeIdSelector,
} from "@redux/features/enrollmentEmployer/selectors";
import PrimaryContactPerson from "./PrimaryContactPerson";

const mapStateToProps = (state) => ({
  contactPerson: enrContactByTypeIdSelector(state, "CT_PCP"),
  telephoneNo: clientPhoneByTypeIdSelector(state, "CT_PCP", "TP_TP"),
  mobileNo: clientPhoneByTypeIdSelector(state, "CT_PCP", "TP_MB"),
});

export default connect(mapStateToProps, null)(PrimaryContactPerson);
