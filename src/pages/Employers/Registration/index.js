import { connect } from "react-redux";
import { registrationCompanyInformationSelector } from "@redux/features/registrationEmployer/selectors";
import Registration from "./Registration";

const mapStateToProps = (state) => ({
  companyRegInfo: registrationCompanyInformationSelector(state),
});

export default connect(mapStateToProps, null)(Registration);
