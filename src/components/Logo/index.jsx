import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      className="flex items-center cursor-pointer w-1/3"
      onClick={() => navigate('/')}
    >
      <img src={logo} alt="LogoShop" className="w-1/3 md:w-1/4" />
      <Box className=" text-left font-semibold">
        <p className="whitespace-nowrap text-[0.5rem] md:text-sm">
          {t('branch_name')}
        </p>
        <p className="whitespace-wrap text-[0.5rem] md:text-sm">
          {t('logo_describe')}
        </p>
      </Box>
    </Box>
  );
};

export default Logo;
