import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Chip as MuiChip } from "@material-ui/core";

const Chip = (props) => {
  const {
    customTypes,
    nationality,
    countries,
    trustees,
    schemes,
    pair,
    ...rest
  } = props;
  const { t } = useTranslation(["form"]);
  let label = t(`form:label.${pair.key}`) + ": ";

  if (nationality?.cstmGrpId === "NTN") {
    label += nationality?.cstmTypId;
  } else if (customTypes?.[pair.value]?.cstmTypDtlTxt) {
    label += customTypes?.[pair.value]?.cstmTypDtlTxt;
  } else if (countries?.[pair.value]?.cntryTypNm) {
    label += countries?.[pair.value]?.cntryTypNm;
  } else if (trustees?.[pair.value]?.name) {
    label += trustees?.[pair.value]?.name;
  } else if (schemes?.[pair.value]?.name) {
    label += schemes?.[pair.value]?.name;
  } else {
    label += pair.value;
  }

  return <MuiChip label={label} color="primary" {...rest} />;
};

Chip.defaultProps = {
  customTypes: {},
  nationality: {},
  countries: {},
  trustees: {},
  schemes: {},
};

Chip.propTypes = {
  pair: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Chip;
