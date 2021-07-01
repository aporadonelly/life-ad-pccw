import { connect } from "react-redux";
import { directorSelector } from "@redux/features/registrationEmployer/selectors";
import Director from "./Director";

const mapStateToProps = (state) => ({
  director: directorSelector(state),
});

export default connect(mapStateToProps, null)(Director);
