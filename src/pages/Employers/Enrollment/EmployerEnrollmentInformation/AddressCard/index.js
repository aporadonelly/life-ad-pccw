import { connect } from "react-redux";
import { directorsSelector } from "@redux/features/registrationEmployer/selectors";
import AddressCard from "./AddressCard";

const mapStateToProps = (state) => ({
  directorsList: directorsSelector(state),
});

export default connect(mapStateToProps, null)(AddressCard);
