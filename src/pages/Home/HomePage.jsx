import React from 'react';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { useNavigate } from 'react-router-dom';

import topSlider from '~/assets/images/Group 44.png';
import AirPod from '~/assets/images/image 10.png';
import AppleWatch from '~/assets/images/image 9.png';
import Ipad from '~/assets/images/image 7.png';
import Iphone from '~/assets/images/iphone.png';
import TV from '~/assets/images/image 5.png';
import Accessory from '~/assets/images/accessory.png';
import Sale from '~/assets/images/sale.png';
import Authentic from '~/assets/images/auth.png';
import FastDeliver from '~/assets/images/fastDeli.png';
import middleSlider from '~/assets/images/Slider.png';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ProductItem from '~/components/Products/ProductItem/ProductItem';
import Store from './components/Store';
import Experience from './components/Experience';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {},
  top_slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  product_container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'space-between',
    '& .iPhone': {
      '& img': {
        width: '43%',
      },
    },
    // "& .appleWatch": {
    //   "& img": {
    //     width: "49%",
    //   },
    // },
    // "& .iPad": {
    //   "& img": {
    //     width: "80%",
    //   },
    // },
  },

  product: {
    flex: '1 0 16%',
    backgroundColor: '#C4C4C4',
    padding: '10px',
    margin: '20px 25px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '& img': {
      width: '80%',
      height: 'auto',
    },
    '& .MuiTypography-root': {
      position: 'relative',
      top: '20px',
    },
  },
  newest_product: {
    padding: '20px 20px',
  },
  locate: {
    padding: '5px 20px',
    marginBottom: '30px',
  },
  locate_img: {
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    justifyContent: 'space-between',
    '& img': {
      width: '80%',
      flex: '1 0 40%',
    },
  },
  middle_slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    marginTop: '20px',
  },
  storeDistinction: {
    padding: '5px 20px',
    marginBottom: '30px',
  },
  distinction_col: {
    // display: "flex",
    // flexWrap: "wrap",
    // boxSizing: "border-box",
    // "& img": {
    //   flex: "1 0 30%",
    // },
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& img': {
      width: '30%',
      flex: '1 0 40%',
      marginBottom: '20px',
    },
  },
  col_item: {
    width: '250px',
    height: '150px',
    padding: '20px 0px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 5px #888',
  },
  address: {
    backgroundColor: 'rgba(255,255,255,0.56)',
  },
}));

function HomePage() {
  const { t } = useTranslation();
  const classes = useStyles();
  // const navigate = useNavigate();
  // const handleMacClick = () => {
  //   navigate('/Mac');
  // };

  return (
    <>
      <div className="flex justify-end my-8">
        <img src={topSlider} alt="" />{' '}
      </div>
      <div className="container-wrapper my-8">
        <div className="inline-grid grid-cols-4 gap-10">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="mt-8">
          <img src={middleSlider} alt="" />
        </div>
        <Store />
        <div className="mt-8">
          <h2 className="drop-shadow-lg font-medium text-3xl mb-3">
            {t('come_to_store')}
          </h2>
          <div className="flex justify-between gap-14 px-8 py-4 drop-shadow-lg">
            <Card className="w-1/3">
              <CardContent>
                <Experience image={FastDeliver} message={t('fast_deli')} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardContent>
                <Experience image={Authentic} message={t('auth_commit')} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardContent>
                <Experience image={Sale} message={t('sale_programs')} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
