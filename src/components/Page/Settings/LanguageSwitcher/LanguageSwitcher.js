import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@material-ui/core";
// import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation("translation");

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select
      disableUnderline
      MenuProps={{
        classes: {
          // paper: minimalSelectClasses.paper,
          // list: minimalSelectClasses.list
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        getContentAnchorEl: null,
      }}
      value={i18n.language}
      onChange={handleChange}
    >
      <MenuItem value="en-US">English</MenuItem>
      <MenuItem value="zh-CN">Chinese (Simplified)</MenuItem>
      <MenuItem value="zh-HK">Chinese (Traditional)</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
