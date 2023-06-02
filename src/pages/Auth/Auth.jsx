import React from 'react';
import HomePage from 'assets/images/HomePage.png';
import LoginForm from './components/LoginForm/LoginForm';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useMatch, useNavigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Logo from '~/components/Logo';
import logo from 'assets/images/logo.png';
import { useTranslation } from 'react-i18next';

Auth.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  left: {
    width: '60%',
    height: '100%',
    maxHeight: '100vh',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  right: {
    // margin: "10px 50px 0 50px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: '1',
  },
}));

function Auth(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const match = useMatch('/login');
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Box className={`${classes.left} relative`}>
        <img src={HomePage} alt="Hình ảnh trang chủ" />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center flex-wrap text-white">
          <div
            className="flex cursor-pointer justify-center"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="LogoShop" className="!w-24" />
            <div className=" text-left m-auto">
              <p className="font-bold">i-Tech Store</p>
              <p className=" text-white/70">Apple Authorised Reseller</p>
            </div>
          </div>
          <div className="w-full">{t('slogan')}</div>
        </div>
      </Box>
      <Box className={classes.right}>
        {match ? <LoginForm /> : <RegisterForm />}
      </Box>
    </div>
  );
}

export default Auth;
