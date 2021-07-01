import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  isLoadingSelector,
  errorSelector,
  authorizedPersonSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";

import ViewProfile from "./ViewProfile";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  authPerson: authorizedPersonSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCmpnyRltdPrsn }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
