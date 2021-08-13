import { connect } from "react-redux";
import { crsFormListSelector } from "@redux/features/enrollmentEmployer/selectors";
import SelfCertificationList from "./SelfCertificationList";

const mapStateToProps = (state) => ({
  crsListForm: crsFormListSelector(state),
});

export default connect(mapStateToProps, null)(SelfCertificationList);
