import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from 'assets/translation/vi.json';
import en from 'assets/translation/en.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'VI',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.addResourceBundle('VI', 'translation', { ...vi }, true, true);
i18n.addResourceBundle('EN', 'translation', { ...en }, true, true);

export default i18n;
