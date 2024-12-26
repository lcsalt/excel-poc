import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend';

//languages files
//EN
import enGeneral from './en/General.json';
import enHome from './en/Home.json';
import enLayout from './en/Layout.json';
import enNotFound from './en/NotFound.json';
import enAuthentication from './en/Authentication.json';
// ES
import esGeneral from './es/General.json';
import esHome from './es/Home.json';
import esLayout from './es/Layout.json';
import esNotFound from './es/NotFound.json';
import esAuthentication from './es/Authentication.json';

i18n
  //   .use(HttpBackend) // Load translations from backend files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    // lng: 'en', // Set default language
    fallbackLng: 'en', // Fallback language if the user language is not available
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false // React already does escaping
    },
    resources: {
      en: {
        general: enGeneral,
        home: enHome,
        layout: enLayout,
        notFound: enNotFound,
        authentication: enAuthentication
      },
      es: {
        general: esGeneral,
        home: esHome,
        layout: esLayout,
        notFound: esNotFound,
        authentication: esAuthentication
      }
    },
    ns: ['general', 'layout', 'notFound', 'home', 'authentication'], // Namespaces that you use in your app
    defaultNS: 'general' // Default namespace to use if not specified
    // supportedLngs: ['en', 'es'] // List of available languages
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    // },
  });

export default i18n;
