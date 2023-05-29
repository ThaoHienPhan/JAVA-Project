import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from 'assets/images/logo.png';
import payment from 'assets/images/payment.png';
import confirm from 'assets/images/confirm.png';
import { useTranslation } from 'react-i18next';

Footer.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '280px',
    backgroundColor: '#181818',
    textAlign: 'left',
    '& .MuiTypography-root': {
      fontSize: '0.8rem',
    },
  },
  container: {
    padding: '20px 0 20px 0',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  about: {
    display: 'flex',
    marginBottom: '4px',
    color: '#FFFFFF',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  license: {
    display: 'flex',
    color: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: '1rem !important',
    fontWeight: 'bold !important',
    padding: '18px 0',
  },
  content: {
    color: '#FFFFFF',
  },
  subheader: {
    color: '#FF8787',
  },
  input: {
    '& .MuiInputBase-input': {
      color: '#FFFFFF',
      backgroundColor: '#C4C4C4',
      fontSize: '0.8rem',
      borderRadius: '10px',
      width: '100%',
      height: '5px',
    },
  },
}));

function Footer(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className="contact">
          <Box className={classes.about}>
            <img src={logo} alt="LogoShop" />
            <Box className={classes.text}>
              <Typography>i-Tech Store</Typography>
              <Typography className={classes.text_content}>
                Apple Authorised Reseller
              </Typography>
            </Box>
          </Box>
          <Box className={classes.content}>
            <Typography className={classes.subheader}>
              {t('shopping_consultant')}
            </Typography>
            <Typography>190031201</Typography>
            <Typography className={classes.subheader}>
              {t('technical_support')}
            </Typography>
            <Typography>190031201</Typography>
            <Typography className={classes.subheader}>
              {t('feedback_complaints')}
            </Typography>
            <Typography>190031201</Typography>
          </Box>
        </Box>
        <Box className="info">
          <Typography className={classes.header}>{t('information')}</Typography>
          <Box className={classes.content}>
            {[
              'company_intro',
              'FAQ',
              'privacy_policy',
              'electronic_verification',
              'warranty_info',
            ].map((data, i) => (
              <Typography key={i} sx={{ marginTop: '4px' }}>
                {t(data)}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box className="policy">
          <Typography className={classes.header}>{t('policies')}</Typography>
          <Box className={classes.content}>
            {[
              'return_policy',
              'privacy_policy',
              'installment_policy',
              'warranty_policy',
              'general_terms',
            ].map((data, i) => (
              <Typography key={i} sx={{ marginTop: '4px' }}>
                {t(data)}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box className={classes.license}>
          <img src={confirm} alt="Xác nhận của bộ công thương" />
          <Typography>{t('payment_assits')}</Typography>

          <img src={payment} alt="Phương thức thanh toán" />
          <Typography>{t('receive_info')}</Typography>
          <TextField
            className={classes.input}
            placeholder={t('email_fill')}
          ></TextField>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
