import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TopSlider from '../../assets/images/Slider.png';
import SecondSlider from '../../assets/images/secondSlider.png';
import LastSlider from '../../assets/images/LastSlider.png';
import ProductItem from '~/components/Products/ProductItem/ProductItem';

Sale.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {},
  Slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    marginTop: '20px',
  },
  saleProduct: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },
  saleItem: {
    backgroundColor: '#ccc',
    width: '40%',
    height: '50%',
    marginBottom: ' 2%',
    '& img': {
      width: '100%',
    },
  },
}));
function Sale(props) {
  return (
    <div className="container-wrapper text-center text-4xl">
      <h2 className="drop-shadow-lg py-6">
        Tưng bừng khai trương.
        <span className="text-red-500">Giảm giá cực sốc!</span>
      </h2>
      <img src={TopSlider} alt="" />
      <div className="mt-8">
        <h2 className="drop-shadow-lg pb-6">Back to school</h2>
        <img src={SecondSlider} alt="" />
      </div>
      <div className="mt-8">
        <h2 className="drop-shadow-lg pb-6">Sale sập sàn 12.12</h2>
        <img src={LastSlider} alt="" />
      </div>
      <div className="mt-8 py-6 px-20 inline-grid grid-cols-2 gap-16 w-full">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default Sale;
