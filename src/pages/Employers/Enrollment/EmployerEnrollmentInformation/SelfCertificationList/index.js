import { connect } from "react-redux";
import { enrCRSFormListSelector } from "@redux/features/enrollmentEmployer/selectors";
import SelfCertificationList from "./SelfCertificationList";

const mapStateToProps = (state) => ({
  crsList: enrCRSFormListSelector(state),
});

export default connect(mapStateToProps, null)(SelfCertificationList);
