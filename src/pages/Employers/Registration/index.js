import { connect } from "react-redux";
import { employerSelector } from "@redux/features/enrollmentEmployer/selectors";
import Registration from "./Registration";

const mapStateToProps = (state) => ({
  employer: employerSelector(state),
});

export default connect(mapStateToProps, null)(Registration);
