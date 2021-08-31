import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import {
  indAccntLstSelector,
  isLoadingSelector,
} from "@redux/features/enrollmentCasualEmployee/selectors";
import { employeeSelector } from "@redux/features/registrationEmployee/selectors";
import { getIndAccntLst } from "@redux/features/enrollmentCasualEmployee/actions";
import AccountTypes from "./AccountTypes";

const mapStateToProps = (state, ownProps) => {
  const { pnsnIdTxt } = ownProps.match.params;
  return {
    employee: employeeSelector(state, pnsnIdTxt),
    indAccntLst: indAccntLstSelector(state),
    isLoading: isLoadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getIndAccntLst,
      push,
    },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AccountTypes);
