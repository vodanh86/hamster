import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../src/locales/en/translation.json';
import translationDE from '../src/locales/de/translation.json';
import translationVI from '../src/locales/vi/translation.json';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: translationEN
      },
      de: {
        translation: translationDE
      },
      vi: {
        translation: translationVI
      }
    },
  });

export default i18n;
