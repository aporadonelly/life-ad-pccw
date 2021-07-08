import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { gradeInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import { ldGradeInfo } from "@redux/features/enrollmentEmployer/actions";
import Grade from "./Grade";

const mapStateToProps = (state) => ({
  gradeInfo: gradeInfoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, ldGradeInfo }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grade);
