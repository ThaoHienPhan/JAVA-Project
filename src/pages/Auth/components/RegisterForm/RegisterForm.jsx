import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import InputField from 'components/form-control/inputField/InputField';
import PasswordField from 'components/form-control/passwordField/PasswordField';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import testComponent from '../TestComponent/TestComponent';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { register } from '~/api/authApi';
import { useNavigate } from 'react-router-dom';

RegisterForm.propTypes = {};
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
function RegisterForm(props) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();
  const schema = yup
    .object({
      username: yup
        .string()
        .min(6)
        .max(20)
        .required('Please enter your email address'),
      password: yup.string().min(6).required('Please enter your password'),
      retypePassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
    })
    .required();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async values => {
    // const { onSubmit } = props;
    // if (onSubmit) {
    //   await onSubmit(values);
    // }
    dispatch(register({ username: values.username, password: values.password }))
      .then(() => {
        // Đăng nhập thành công, điều hướng đến trang '/'
        navigate('/login');
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.log('Đăng kí thất bại:', error);
      });
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      <testComponent />
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Box className={classes.header}>
        <Typography variant="h2">{t('register')}</Typography>
        <Typography>{t('register_note_1')}</Typography>
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
          <Box className={classes.input}>
            <LockIcon />
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              form={form}
            />
          </Box>
          <button
            disabled={isSubmitting}
            type="submit"
            onClick={() => navigate('/register')}
            className="mt-3 rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-2/3"
          >
            {t('signup_btn')}
          </button>
        </form>
        <div className="mt-[20px] flex gap-[10px] text-xl pl-[60px]">
          <span>{t('dont_have_acc')}</span>
          <button
            onClick={() => navigate('/login')}
            className="border-solid font-medium border-black text-blue-900 hover:underline"
          >
            {t('login_btn')}
          </button>
        </div>
      </Box>
      <Box className={classes.socialLogin}>
        <Typography>{t('register_note_2')}</Typography>
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

export default RegisterForm;
