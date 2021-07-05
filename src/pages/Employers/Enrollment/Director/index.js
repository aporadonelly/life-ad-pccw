import { connect } from "react-redux";
import {
  directorSelector,
  directorAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import Director from "./Director";

const mapStateToProps = (state) => ({
  director: directorSelector(state),
  residentialAddress: directorAddressByTypeIdSelector(state, "AD_R"),
});

export default connect(mapStateToProps, null)(Director);
