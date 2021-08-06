import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  directorSelector,
  directorAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import Director from "./Director";

const mapStateToProps = (state, ownProps) => {
  const { clntUuid } = ownProps.match.params;
  return {
    director: directorSelector(state, clntUuid),
    residentialAddress: directorAddressByTypeIdSelector(
      state,
      clntUuid,
      "AD_R"
    ),
    customTypes: customTypesEntitiesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ldCmpnyRltdPrsn, push }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Director);
