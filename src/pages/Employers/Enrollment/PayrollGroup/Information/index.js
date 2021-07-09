import { connect } from "react-redux";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import Information from "./Information";

const mapStateToProps = (state) => ({
  directorsList: directorsSelector(state),
});

export default connect(mapStateToProps, null)(Information);
