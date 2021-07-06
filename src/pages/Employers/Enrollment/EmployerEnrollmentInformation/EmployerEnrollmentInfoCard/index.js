import { connect } from "react-redux";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import EmployerEnrollmentInfoCard from "./EmployerEnrollmentInfoCard";

const mapStateToProps = (state) => ({
  directorsList: directorsSelector(state),
});

export default connect(mapStateToProps, null)(EmployerEnrollmentInfoCard);
