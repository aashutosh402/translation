import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationEN from "./Lang/en.json";
import translationHE from "./Lang/hi.json";
import translationFR from "./Lang/fr.json";
import translationAR from "./Lang/ar.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  hn: {
    translation: translationHE,
  },
  fr:{
    translation: translationFR,
  },
  ar:{
    translation: translationAR,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;