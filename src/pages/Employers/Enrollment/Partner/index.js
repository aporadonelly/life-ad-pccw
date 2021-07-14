import { connect } from "react-redux";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  partnerSelector,
  partnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import Partner from "./Partner";

const mapStateToProps = (state) => ({
  partner: partnerSelector(state),
  residentialAddress: partnerAddressByTypeIdSelector(state, "AD_R"),
  customTypes: customTypesEntitiesSelector(state),
});

export default connect(mapStateToProps, null)(Partner);
