import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  authorizedPersonSelector,
  authorizedPersonAddressByTypeIdSelector,
  authorizedPersonPhoneByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import AuthorizedPerson from "./AuthorizedPerson";

const mapStateToProps = (state) => ({
  authorizedPerson: authorizedPersonSelector(state),
  telephone: authorizedPersonPhoneByTypeIdSelector(state, "TP_TP"),
  mobile: authorizedPersonPhoneByTypeIdSelector(state, "TP_MB"),
  residentialAddress: authorizedPersonAddressByTypeIdSelector(state, "AD_R"),
  businessAddress: authorizedPersonAddressByTypeIdSelector(state, "AD_B"),
  correspondenceAddress: authorizedPersonAddressByTypeIdSelector(state, "AD_C"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCmpnyRltdPrsn }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedPerson);
