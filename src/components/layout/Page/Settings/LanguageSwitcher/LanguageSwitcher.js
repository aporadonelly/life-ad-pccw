import { useTranslation } from "react-i18next";
import { TextField, MenuItem } from "@material-ui/core";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation("translation");

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <TextField
      select
      label="Language"
      variant="outlined"
      size="small"
      fullWidth
      value={i18n.language}
      onChange={handleChange}
    >
      <MenuItem value="en-US">English</MenuItem>
      <MenuItem value="zh-CN">Chinese (Simplified)</MenuItem>
      <MenuItem value="zh-HK">Chinese (Traditional)</MenuItem>
    </TextField>
  );
};

export default LanguageSwitcher;
