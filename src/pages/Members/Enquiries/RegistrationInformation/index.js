import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  empRegInfoSelector,
  // empRegInfoPhoneByTypeIdSelector,
  // empRegInfoContactByCntctPrsnTypIdSelector,
} from "@redux/features/registrationEmployee/selectors";
import { ldRegIndInfo } from "@redux/features/registrationEmployee/actions";
import RegistrationInformation from "./RegistrationInformation";

const mapStateToProps = (state) => ({
  empRegInfo: empRegInfoSelector(state),
  // mobile: empRegInfoPhoneByTypeIdSelector(state, "TP_MB"),
  // secondaryContact: empRegInfoContactByCntctPrsnTypIdSelector(state, "CT_SCP"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldRegIndInfo, push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(RegistrationInformation);
