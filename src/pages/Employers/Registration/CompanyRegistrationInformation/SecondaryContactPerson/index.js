import { connect } from "react-redux";
import {
  registrationCompanyInformationSelector,
  clientPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import SecondaryContactPerson from "./SecondaryContactPerson";

const mapStateToProps = (state) => ({
  companyRegInfo: registrationCompanyInformationSelector(state),
  telephone: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_TP"),
  mobile: clientPhoneByTypeIdSelector(state, "CT_SCP", "TP_MB"),
});

export default connect(mapStateToProps, null)(SecondaryContactPerson);
