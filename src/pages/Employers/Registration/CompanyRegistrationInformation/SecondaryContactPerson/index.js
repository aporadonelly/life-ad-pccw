import { connect } from "react-redux";
import {
  registrationCompanyInformationSelector,
  contactByTypeIdSelector,
  clientPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import SecondaryContactPerson from "./SecondaryContactPerson";

const mapStateToProps = (state) => ({
  companyRegInfo: registrationCompanyInformationSelector(state),
  contact: contactByTypeIdSelector(state, "CT_SCP"),
  telephone: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_TP"),
  mobile: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_MB"),
});

export default connect(mapStateToProps, null)(SecondaryContactPerson);
