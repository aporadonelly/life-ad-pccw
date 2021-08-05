import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import PayrollGroup from "./PayrollGroup";

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push }, dispatch),
});

export default connect(null, mapDispatchToProps)(PayrollGroup);
