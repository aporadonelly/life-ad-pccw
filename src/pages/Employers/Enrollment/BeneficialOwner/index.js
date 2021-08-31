import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "@redux/helpers";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  beneficialOwnerSelector,
  beneficialOwnerAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import { ldCmpnyRltdPrsn } from "@redux/features/registrationEmployer/actions";
import BeneficialOwner from "./BeneficialOwner";

const mapStateToProps = (state, ownProps) => {
  const { clntUuid } = ownProps.match.params;
  return {
    beneficialOwner: beneficialOwnerSelector(state, clntUuid),
    residentialAddress: beneficialOwnerAddressByTypeIdSelector(
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

export default compose(withRouter, withConnect)(BeneficialOwner);
