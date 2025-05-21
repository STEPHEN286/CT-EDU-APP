import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from  'i18next-http-backend'

import enNavbar from "../public/locales/en/navbar.json"
import frNavbar from "../public/locales/fr/navbar.json"
import enHero from "../public/locales/en/hero.json"
import frHero from "../public/locales/fr/hero.json"
// import enHero from './components/Hero';
// Translation resources
const resources = {
  en: {
  
    navbar: enNavbar,
    hero: enHero
  },
  fr: {
    navbar: frNavbar,
    hero : frHero

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
