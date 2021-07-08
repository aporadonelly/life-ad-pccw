import { connect } from "react-redux";
import {
  registrationCompanyInformationSelector,
  contactByTypeIdSelector,
  clientPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import PrimaryContactPerson from "./PrimaryContactPerson";

const mapStateToProps = (state) => ({
  companyRegInfo: registrationCompanyInformationSelector(state),
  contact: contactByTypeIdSelector(state, "CT_PCP"),
  telephone: clientPhoneByTypeIdSelector(state, "CT_PCP", "TP_TP"),
  mobile: clientPhoneByTypeIdSelector(state, "CT_PCP", "TP_MB"),
});

export default connect(mapStateToProps, null)(PrimaryContactPerson);
