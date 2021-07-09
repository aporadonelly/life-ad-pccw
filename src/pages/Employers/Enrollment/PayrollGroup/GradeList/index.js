import { connect } from "react-redux";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import GradeList from "./GradeList";

const mapStateToProps = (state) => ({
  directorsList: directorsSelector(state),
});

export default connect(mapStateToProps, null)(GradeList);
