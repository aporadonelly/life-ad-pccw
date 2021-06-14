import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  customTypeByIdSelector,
  countrySelector,
} from "@redux/features/system/selectors";
import { Chip as MuiChip } from "@material-ui/core";
import moment from "moment";

const Chip = (props) => {
  const { customType, country, pair, ...rest } = props;
  const { t } = useTranslation(["form"]);
  let label = t(`form:label.${pair.key}`) + ": ";

  if (customType.cstmGrpId === "NTN") label += customType.cstmTypId;
  else if (customType.cstmTypDtlTxt) label += customType.cstmTypDtlTxt;
  else if (country.cntryTypNm) label += country.cntryTypNm;
  else if (moment(pair.value, "YYYY/MM/DD", true).isValid())
    label += moment(pair.value).format("DD/MM/YYYY");
  else label += pair.value;

  return <MuiChip label={label} color="primary" {...rest} />;
};

const mapStateToProps = (state, { pair }) => ({
  country: countrySelector(state, pair.value),
  customType: customTypeByIdSelector(state, pair.value),
});

Chip.defaultProps = {
  customType: {},
  country: {},
};

Chip.propTypes = {
  pair: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default connect(mapStateToProps, null)(Chip);
