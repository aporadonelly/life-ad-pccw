import { connect } from "react-redux";
import { partnerSelector } from "@redux/features/registrationEmployer/selectors";
import Partner from "./Partner";

const mapStateToProps = (state) => ({
  partner: partnerSelector(state),
});

export default connect(mapStateToProps, null)(Partner);
