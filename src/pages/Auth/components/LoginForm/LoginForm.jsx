import React from 'react';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
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

function LoginForm(props) {
  const classes = useStyles();
  const { t } = useTranslation();

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
      navigate('/');
    } catch (err) {
      console.log('Loi ne:', t(err));
    }
  };

  const handleSubmit = values => {
    dispatch(login({ username: values.username, password: values.password }))
      .then(() => {
        // Đăng nhập thành công, điều hướng đến trang '/'
        navigate('/');
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.log('Đăng nhập thất bại:', error);
      });
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Box className={classes.header}>
        <Typography variant="h2">{t('welcome')}</Typography>
        <Typography>{t('login_note_1')}</Typography>
      </Box>
      <Box>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
