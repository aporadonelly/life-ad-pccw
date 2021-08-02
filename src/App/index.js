import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isAuthenticatingSelector } from "@redux/features/user/selectors";
import { reissue } from "@redux/features/user/actions";
import App from "./App";

const mapStateToProps = (state) => ({
  isAuthenticating: isAuthenticatingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ reissue }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
