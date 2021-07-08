import { connect } from "react-redux";
import { addressByTypeIdSelector } from "@redux/features/registrationEmployer/selectors";
import AddressCard from "./AddressCard";

const mapStateToProps = (state) => ({
  registeredAddress: addressByTypeIdSelector(state, "AD_RO"),
  businessAddress: addressByTypeIdSelector(state, "AD_B"),
  correspondenceAddress: addressByTypeIdSelector(state, "AD_C"),
});

export default connect(mapStateToProps, null)(AddressCard);
