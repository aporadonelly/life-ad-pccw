import { connect } from "react-redux";
import {
  authorizedPersonSelector,
  authorizedPersonAddressByTypeIdSelector,
  authorizedPersonPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import AuthorizedPerson from "./AuthorizedPerson";

const mapStateToProps = (state) => ({
  authorizedPerson: authorizedPersonSelector(state),
  telephone: authorizedPersonPhoneByTypeIdSelector(state, "TP_TP"),
  mobile: authorizedPersonPhoneByTypeIdSelector(state, "TP_MB"),
  residentialAddress: authorizedPersonAddressByTypeIdSelector(state, "AD_R"),
});

export default connect(mapStateToProps, null)(AuthorizedPerson);
