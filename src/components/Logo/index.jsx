import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.png';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="flex justify-center items-center cursor-pointer"
      onClick={() => navigate('/')}
    >
      <img src={logo} alt="LogoShop" />
      <Box className=" text-left font-bold">
        <p>i-Tech Store</p>
        <p className=" text-[0.5rem]">Apple Authorised Reseller</p>
      </Box>
    </Box>
  );
};

export default Logo;
