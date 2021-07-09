import { connect } from "react-redux";
import { authorizedPersonsSelector } from "@redux/features/registrationEmployer/selectors";
import SelfCertification from "./SelfCertification";

const mapStateToProps = (state) => ({
  authorizedPersons: authorizedPersonsSelector(state),
});

export default connect(mapStateToProps, null)(SelfCertification);
