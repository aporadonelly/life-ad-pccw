import { connect } from "react-redux";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  beneficialOwnerSelector,
  beneficialOwnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import BeneficialOwner from "./BeneficialOwner";

const mapStateToProps = (state) => ({
  beneficialOwner: beneficialOwnerSelector(state),
  residentialAddress: beneficialOwnerAddressByTypeIdSelector(state, "AD_R"),
  customTypes: customTypesEntitiesSelector(state),
});

export default connect(mapStateToProps, null)(BeneficialOwner);
