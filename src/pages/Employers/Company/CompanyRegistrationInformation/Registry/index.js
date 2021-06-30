import { connect } from "react-redux";
import CompanyProfile from "./CompanyProfile";
import { bindActionCreators } from "redux";
import { ldRegCmpnyInfoforAdmnPrtl } from "@redux/features/registrationEmployer/actions";
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
  ...bindActionCreators({ ldRegCmpnyInfoforAdmnPrtl }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
