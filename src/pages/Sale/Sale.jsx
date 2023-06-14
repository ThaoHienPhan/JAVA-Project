import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TopSlider from 'assets/images/Slider.png';
import SecondSlider from 'assets/images/secondSlider.png';
import LastSlider from 'assets/images/LastSlider.png';
import ProductItem from 'components/Products/ProductItem/ProductItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

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
  const { t } = useTranslation();
  const { products } = useSelector(state => state.product);
  console.log(products);

  return (
    <div className="container-wrapper text-center text-4xl">
      <h2 className="drop-shadow-lg py-6">
        {t('grand_open_1')}
        <span className="text-red-500"> {t('grand_open_2')}</span>
      </h2>
      <img src={TopSlider} alt="slider" className='transform hover:scale-105 transition-all duration-300 '/>
      <div className="mt-8">
        <h2 className="drop-shadow-lg pb-6">Back to school</h2>
        <img src={SecondSlider} alt=""  className='transform hover:scale-105 transition-all duration-300'/>
      </div>
      <div className="mt-8">
        <h2 className="drop-shadow-lg pb-6">{t('hot_sale_12_12')}</h2>
        <img src={LastSlider} alt="" className='transform hover:scale-105 transition-all duration-300'/>
      </div>
      <div className="mt-8 py-6 px-20 inline-grid grid-cols-2 gap-16 w-full">
        {products.slice(0, 4).map((item, i) => (
          <ProductItem key={`${item.id}_${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sale;
