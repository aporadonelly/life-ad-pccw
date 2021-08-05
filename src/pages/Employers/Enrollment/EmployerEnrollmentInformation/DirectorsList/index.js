import { connect } from "react-redux";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import DirectorsList from "./DirectorsList";

const mapStateToProps = (state) => ({
  directorsList: directorsSelector(state),
});

export default connect(mapStateToProps, null)(DirectorsList);
