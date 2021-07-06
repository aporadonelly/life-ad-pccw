import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
// import {} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import EmployerEnrollmentInformation from "./EmployerEnrollmentInformation";

// const mapStateToProps = (state) => ({
//   authorizedPerson: authorizedPersonSelector(state),
// telephone: authorizedPersonPhoneByTypeIdSelector(state, "TP_TP"),
//   mobile: authorizedPersonPhoneByTypeIdSelector(state, "TP_MB"),
//   residentialAddress: authorizedPersonAddressByTypeIdSelector(state, "AD_R"),
// });

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ldCmpnyRltdPrsn,
      push,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(EmployerEnrollmentInformation);
