import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationData from "@locales/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: translationData.ko },
    en: { translation: translationData.en },
    ja: { translation: translationData.ja },
    fr: { translation: translationData.fr },
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
