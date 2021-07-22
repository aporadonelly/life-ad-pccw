import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { gradeListSelector } from "@redux/features/enrollmentEmployer/selectors";
import { getGradeLst } from "@redux/features/enrollmentEmployer/actions";
import GradeList from "./GradeList";

const mapStateToProps = (state) => ({
  gradeList: gradeListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ push, getGradeLst }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);
