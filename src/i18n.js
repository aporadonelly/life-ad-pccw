import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import moment from "moment";

i18n.use(LanguageDetector);
i18n.use(HttpApi);
i18n.init({
  debug: false,
  fallbackLng: "en-US",
  whitelist: ["en-US", "zh-CN", "zh-HK"],
  backend: {
    loadPath: `${process.env.PUBLIC_URL}/locales/i18n/{{lng}}/{{ns}}.json`,
  },
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (moment(value).isValid()) {
        return moment(value).format(format);
      }
      return value;
    },
  },
});

i18n.on("languageChanged", (locale) => {
  moment.locale(locale);
});

export default i18n;
