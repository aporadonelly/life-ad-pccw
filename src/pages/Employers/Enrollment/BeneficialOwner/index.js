import { connect } from "react-redux";
import {
  beneficialOwnerSelector,
  beneficialOwnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import BeneficialOwner from "./BeneficialOwner";

const mapStateToProps = (state) => ({
  beneficialOwner: beneficialOwnerSelector(state),
  residentialAddress: beneficialOwnerAddressByTypeIdSelector(state, "AD_R"),
});

export default connect(mapStateToProps, null)(BeneficialOwner);
