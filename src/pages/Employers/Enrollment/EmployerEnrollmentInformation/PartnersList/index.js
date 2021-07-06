import { connect } from "react-redux";
import { partnersSelector } from "@redux/features/registrationEmployer/selectors";
import PartnerList from "./PartnerList";

const mapStateToProps = (state) => ({
  partnersList: partnersSelector(state),
});
export default connect(mapStateToProps, null)(PartnerList);
