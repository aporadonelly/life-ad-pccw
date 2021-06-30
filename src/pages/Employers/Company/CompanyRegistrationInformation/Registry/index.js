import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import {
  ldRegCmpnyInfoforAdmnPrtl,
  setSelectedClientUUID,
} from "@redux/features/registrationEmployer/actions";
import {
  registrationCompanyInformationSelector,
  isLoadingSelector,
  errorSelector,
} from "@redux/features/registrationEmployer/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  companyRegInfo: registrationCompanyInformationSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { ldRegCmpnyInfoforAdmnPrtl, setSelectedClientUUID, push },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
