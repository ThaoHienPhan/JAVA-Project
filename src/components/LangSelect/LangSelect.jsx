import * as React from 'react';
import { VN, GB } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '~/store/slices/languageSlice';
export default function AccountMenu() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const { language } = useSelector(state => state.language);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <React.Fragment>
      <button onClick={() => dispatch(changeLanguage('VI'))}>
        <VN className="w-8 h-8" />
      </button>
      <button onClick={() => dispatch(changeLanguage('EN'))}>
        <GB className="w-8 h-8" />
      </button>
    </React.Fragment>
  );
}
