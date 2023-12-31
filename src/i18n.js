import i18n from "i18next";
// import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import enTranslation from '../src/english.json';
import knTranslation from '../src/kannada.json';
import hnTranslation from '../src/hindi.json';

// the translations
// const resources = {
//   en: {
//     translation: translationEN
//   }
// };

const resources= {
    en: {
      translation: enTranslation, 
    },
    kn: {
      translation: knTranslation, 
    },
    hn: {
      translation: hnTranslation, 
    }
  };

i18n
.use(detector)
.use(backend)
//   .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;