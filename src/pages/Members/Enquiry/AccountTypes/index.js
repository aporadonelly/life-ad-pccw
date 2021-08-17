import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  indAccntLstSelector,
  isLoadingSelector,
} from "@redux/features/enrollmentCasualEmployee/selectors";
import { getIndAccntLst } from "@redux/features/enrollmentCasualEmployee/actions";
import AccountTypes from "./AccountTypes";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
  indAccntLst: indAccntLstSelector(state),
  isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getIndAccntLst,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountTypes);
