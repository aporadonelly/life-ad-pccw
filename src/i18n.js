import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n.use(LanguageDetector);
i18n.use(HttpApi);
i18n.init({
  debug: false,
  fallbackLng: "en-US",
  whitelist: ["en-US", "zh-CN", "zh-HK"],
  backend: { loadPath: "/locales/i18n/{{lng}}/{{ns}}.json" },
});

export default i18n;
