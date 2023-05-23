import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { VN, GB } from 'country-flag-icons/react/3x2';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GlobalContextProvider } from '~/context/StoreContext';
export default function AccountMenu() {
  const { i18n } = useTranslation();
  const { setLanguage } = React.useContext(GlobalContextProvider);

  const onChangeLanguage = lang => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <React.Fragment>
      <button onClick={() => onChangeLanguage('VI')}>
        <VN className="w-8 h-8" />
      </button>
      <button onClick={() => onChangeLanguage('EN')}>
        <GB className="w-8 h-8" />
      </button>
    </React.Fragment>
  );
}
