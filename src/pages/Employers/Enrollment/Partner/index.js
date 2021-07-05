import { connect } from "react-redux";
import {
  partnerSelector,
  partnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import Partner from "./Partner";

const mapStateToProps = (state) => ({
  partner: partnerSelector(state),
  residentialAddress: partnerAddressByTypeIdSelector(state, "AD_R"),
});

export default connect(mapStateToProps, null)(Partner);
