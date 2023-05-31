import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Button, Icon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from 'assets/images/logo.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';

import LangSelect from 'components/LangSelect/LangSelect';
import { useDispatch } from 'react-redux';
import { logout } from '~/store/slices/authSlice';

Header.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
  },
  left: { display: 'flex', alignItems: 'center', gap: '40px' },
  about: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    textAlign: 'left',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navigate: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#181818',
    padding: '0 200px',
    '& .MuiButtonBase-root': {
      color: '#FFFFFF !important',
      textTransform: 'capitalize',
    },
    zIndex: 7,
  },
  text_content: {
    fontSize: '0.5rem !important', // sử dụng con của text đi
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '15px',
  backgroundColor: '#E5E5E5',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '7px',
  top: '0',
  color: '#8F8F8F',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '10px',
    fontSize: '0.8rem',
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Box className={classes.header}>
        <Box className={classes.left}>
          <Box className={classes.about} onClick={() => navigate('/')}>
            <img src={logo} alt="LogoShop" />
            <Box className={classes.text}>
              <Typography>i-Tech Store</Typography>
              <Typography className={classes.text_content}>
                Apple Authorised Reseller
              </Typography>
            </Box>
          </Box>
          <Box className="search">
            <Search>
              <StyledInputBase
                className="hover:bg-[#E5E5E5] hover:rounded-[15px]"
                placeholder={t('product_search')}
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Box>
        </Box>
        <Box className={classes.right}>
          <LocationOnIcon />
          <HelpOutlineIcon />
          <ShoppingCartIcon />
          {!isLoggedIn ? (
            <>
              <div className="w-28">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-full text-[#FBFBFB] border-2 border-solid border-black bg-[#363636]/[.94] px-3 py-2 font-medium w-full"
                >
                  {t('login_btn')}
                </button>
              </div>
              <div className="w-28">
                <button
                  onClick={() => navigate('/register')}
                  className="rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-full"
                >
                  {t('signup_btn')}
                </button>
              </div>
            </>
          ) : (
            <div className="w-28">
              <button
                onClick={() => {
                  dispatch(logout());
                  setIsLoggedIn(false);
                }}
                className="rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-full"
              >
                {t('logout_btn')}
              </button>
            </div>
          )}

          <LangSelect />
        </Box>
      </Box>
      <Box className={classes.navigate}>
        {[
          'sale',
          'mac',
          'ipad',
          'iphone',
          'watch',
          'airpods',
          'accessories',
        ].map((value, i) => (
          <Button key={i} onClick={() => navigate(`/${value}`)}>
            {t(value)}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default Header;
