import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import Slider from '../../assets/images/Mac slider.png';
import ProductItem from '~/components/Products/ProductItem/ProductItem';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';
import OtherProducts from '~/components/Products/ProductItem/OtherProducts';
import HotSale from '~/components/Products/ProductItem/HotSale';
import BannerWithBtn from '~/components/Products/ProductItem/BannerWithBtn';

Mac.propTypes = {};
const useStyles = makeStyles(() => ({
  slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  btnContainer: {
    width: '100%',
    position: 'relative',
  },
  btn: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid  rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(0, 0, 0, 0.76)',
    color: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
function Mac(props) {
  const classes = useStyles();

  return (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={Slider} />
      <HotSale />
      <OtherProducts />
    </div>
  );
}

export default Mac;
