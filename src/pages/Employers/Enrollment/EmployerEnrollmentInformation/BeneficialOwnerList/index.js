import { connect } from "react-redux";
import { beneficialOwnersSelector } from "@redux/features/registrationEmployer/selectors";
import BeneficialOwnerList from "./BeneficialOwnerList";

const mapStateToProps = (state) => ({
  beneficialOwnersList: beneficialOwnersSelector(state),
});

export default connect(mapStateToProps, null)(BeneficialOwnerList);
