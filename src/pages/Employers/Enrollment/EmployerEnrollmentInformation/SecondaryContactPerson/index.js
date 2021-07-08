import { connect } from "react-redux";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import SecondaryContactPerson from "./SecondaryContactPerson";

const mapStateToProps = (state) => ({
  enrCompanyInfo: enrCompanyInfoSelector(state),
});

export default connect(mapStateToProps, null)(SecondaryContactPerson);
