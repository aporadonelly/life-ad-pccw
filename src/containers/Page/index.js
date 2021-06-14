import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  systemEnvSelector,
  cycleDateSelector,
} from "@redux/features/system/selectors";
import { userSelector } from "@redux/features/user/selectors";
import { logout, reissue } from "@redux/features/user/actions";
import Page from "./Page";

const mapStateToProps = (state) => ({
  systemEnv: systemEnvSelector(state),
  cycleDate: cycleDateSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ logout, reissue }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
