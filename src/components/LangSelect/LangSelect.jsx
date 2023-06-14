import * as React from 'react';
import { VN, GB } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '~/store/slices/languageSlice';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { Language, Logout, PersonAdd, Settings } from '@mui/icons-material';
export default function AccountMenu() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const { language } = useSelector(state => state.language);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Language sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <button
            className="flex items-center gap-3"
            onClick={() => dispatch(changeLanguage('VI'))}
          >
            <VN className="w-8 h-8" /> {t('vietnamese')}
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="flex items-center gap-3"
            onClick={() => dispatch(changeLanguage('EN'))}
          >
            <GB className="w-8 h-8" />
            {t('english')}
          </button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
