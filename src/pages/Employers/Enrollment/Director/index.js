import { connect } from "react-redux";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import {
  directorSelector,
  directorAddressByTypeIdSelector,
} from "@redux/features/registrationEmployer/selectors";
import Director from "./Director";

const mapStateToProps = (state) => ({
  director: directorSelector(state),
  residentialAddress: directorAddressByTypeIdSelector(state, "AD_R"),
  customTypes: customTypesEntitiesSelector(state),
});

export default connect(mapStateToProps, null)(Director);
