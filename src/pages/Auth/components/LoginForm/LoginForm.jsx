import React, { useEffect } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InputField from 'components/form-control/inputField/InputField';
import PasswordField from 'components/form-control/passwordField/PasswordField';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'api/authApi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

LoginForm.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {
    padding: '30px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px 0px',
    gap: '15px',
    '& svg': {
      width: '3.4rem',
      height: '4.5rem',
    },
  },
  socialLogin: {
    marginTop: '30px',
  },
  btn: {
    marginTop: '30px !important',
  },
  copyRight: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    '@media (max-width: 768px)': {
      position: 'relative',
      bottom: 'auto',
      transform: 'none',
      textAlign: 'center',
    },
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '2.4rem',
      height: '3.5rem',
    },
  },
}));

function LoginForm() {
  const classes = useStyles();
  const { t } = useTranslation();
  const loginState = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup
    .object({
      username: yup.string().required('Please enter your email address').min(6),
      password: yup.string().required('Please enter your password').min(6),
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = async values => {
    try {
      await dispatch(
        login({ username: values.username, password: values.password })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loginState.loggedIn) {
      navigate('/');
    }
  }, [loginState]);

  useEffect(() => {
    if (loginState.error) {
      toast.error(t(loginState.error));
    }
  }, [loginState.error]);

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Box className={classes.header}>
        <Typography variant="h2">{t('welcome')}</Typography>
        <Typography>{t('login_note_1')}</Typography>
      </Box>
      <Box width={430}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <Box className={classes.input}>
            <PersonOutlineIcon />
            <InputField name="username" label="Username" form={form} />
          </Box>
          <Box className={classes.input}>
            <LockIcon />
            <PasswordField name="password" label="Password" form={form} />
          </Box>

          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-3 rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-2/3"
          >
            {t('login_btn')}
          </button>
        </form>
        <div className="mt-[20px] flex gap-[10px] text-xl pl-[60px]">
          <span>{t('already_logged_in')}</span>
          <button
            onClick={() => navigate('/register')}
            className="border-solid font-medium border-black text-blue-900 hover:underline"
          >
            {t('signup_btn')}
          </button>
        </div>
      </Box>
      <Box className={classes.socialLogin}>
        <Typography>{t('login_note_2')}</Typography>
        <Box className={classes.social}>
          <FacebookIcon color="primary" />
          <img
            src="https://img.icons8.com/color/60/null/gmail-new.png"
            alt="gmail"
          />
          <TwitterIcon color="primary" />
        </Box>
      </Box>
      <Box className={classes.copyRight}>
        <Typography>@Copyright iTech Store</Typography>
      </Box>
    </div>
  );
}

export default LoginForm;
