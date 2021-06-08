import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  employersSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/employers/selectors";
import { getEmployers } from "@redux/features/employers/actions";
import Companies from "./Companies";

const mapStateToProps = (state) => ({
  employers: employersSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getEmployers }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
