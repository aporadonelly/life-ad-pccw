import { connect } from "react-redux";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import AddressCard from "./AddressCard";

const mapStateToProps = (state) => ({
  enrCompanyInfo: enrCompanyInfoSelector(state),
});

export default connect(mapStateToProps, null)(AddressCard);
