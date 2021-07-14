import { connect } from "react-redux";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import Enrollment from "./Enrollment";

const mapStateToProps = (state) => ({
  employer: employerSelector(state),
});

export default connect(mapStateToProps, null)(Enrollment);
