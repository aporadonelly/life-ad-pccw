import { connect } from "react-redux";
import { partnersSelector } from "@redux/features/registrationEmployer/selectors";
import PartnersList from "./PartnersList";

const mapStateToProps = (state) => ({
  partnersList: partnersSelector(state),
});
export default connect(mapStateToProps, null)(PartnersList);
