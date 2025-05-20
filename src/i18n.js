import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from  'i18next-http-backend'

import enNavbar from "../public/locales/en/navbar.json"
import frNavbar from "../public/locales/fr/navbar.json"
// Translation resources
const resources = {
  en: {
  
    navbar: enNavbar
  },
  fr: {
    navbar: frNavbar

  }
 
};

i18n
.use(HttpBackend)
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
