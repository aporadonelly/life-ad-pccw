import { connect } from "react-redux";
import { beneficialOwnerSelector } from "@redux/features/registrationEmployer/selectors";
import BeneficialOwner from "./BeneficialOwner";

const mapStateToProps = (state) => ({
  beneficialOwner: beneficialOwnerSelector(state),
});

export default connect(mapStateToProps, null)(BeneficialOwner);
