import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { map } from "lodash";

export const languages = [
  {
    code: "en-US",
    lang: "English",
  },
  {
    code: "zh-CN",
    lang: "Chinese (Simplified)",
  },
  {
    code: "zh-HK",
    lang: "Chinese (Traditional)",
  },
];

i18n.use(LanguageDetector);
i18n.use(HttpApi);
i18n.init({
  debug: false,
  fallbackLng: "en-US",
  whitelist: map(languages, "code"),
  backend: {
    loadPath: `${process.env.PUBLIC_URL}/locales/i18n/{{lng}}/{{ns}}.json`,
  },
});

export default i18n;
