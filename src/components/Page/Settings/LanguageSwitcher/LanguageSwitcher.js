import { useTranslation } from "react-i18next";
import { TextField, MenuItem } from "@material-ui/core";
import { languages } from "@root/i18n";

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
      {languages.map((language) => (
        <MenuItem key={language.code} value={language.code}>
          {language.lang}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LanguageSwitcher;
