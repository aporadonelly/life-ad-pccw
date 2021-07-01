import { connect } from "react-redux";
import { registrationCompanyInformationSelector } from "@redux/features/registrationEmployer/selectors";
import Enrollment from "./Enrollment";

const mapStateToProps = (state) => ({
  companyRegInfo: registrationCompanyInformationSelector(state),
});

export default connect(mapStateToProps, null)(Enrollment);
