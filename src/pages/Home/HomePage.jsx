import React from 'react';
import { Box, Typography } from '@mui/material';
import topSlider from '../../assets/images/Group 44.png';
import store1 from '../../assets/images/store1.png';
import store2 from '../../assets/images/store2.png';
import Mac from '../../assets/images/image 11.png';
import AirPod from '../../assets/images/image 10.png';
import AppleWatch from '../../assets/images/image 9.png';
import Ipad from '../../assets/images/image 7.png';
import Iphone from '../../assets/images/iphone.png';
import TV from '../../assets/images/image 5.png';
import Accessory from '../../assets/images/accessory.png';
import Sale from '../../assets/images/sale.png';
import Authentic from '../../assets/images/auth.png';
import FastDeliver from '../../assets/images/fastDeli.png';
import middleSlider from '../../assets/images/Slider.png';
import { makeStyles } from '@mui/styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

HomePage.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {},
  top_slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto'
    }
  },
  product_container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'space-between',
    '& .iPhone': {
      '& img': {
        width: '43%'
      }
    }
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
      height: 'auto'
    },
    '& .MuiTypography-root': {
      position: 'relative',
      top: '20px'
    }
  },
  newest_product: {
    padding: '20px 20px'
  },
  locate: {
    padding: '5px 20px',
    marginBottom: '30px'
  },
  locate_img: {
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    '& img': {
      width: '80%',
      flex: '1 0 40%'
    }
  },
  middle_slider: {
    '& img': {
      maxWidth: '100%',
      height: 'auto'
    },
    marginTop: '20px'
  },
  storeDistinction: {
    padding: '5px 20px',
    marginBottom: '30px'
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
      marginBottom: '20px'
    }
  },
  col_item: {
    width: '250px',
    height: '150px',
    padding: '20px 0px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 5px #888'
  }
}));

function HomePage(props) {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box>
        <Box className={classes.top_slider}>
          <img src={topSlider} alt="" />
        </Box>
        <Box className={classes.product_container}>
          <div className={classes.product}>
            <img src={Mac} alt="" />
            <Typography>Mac</Typography>
          </div>
          <div className={`iPhone ${classes.product}`}>
            <img src={Iphone} alt="" />
            <Typography>iPhone</Typography>
          </div>
          <div className={classes.product}>
            <img src={AirPod} alt="" />
            <Typography>AirPod</Typography>
          </div>
          <div className={`appleWatch ${classes.product}`}>
            <img src={AppleWatch} alt="" />
            <Typography>Watch</Typography>
          </div>
          <div className={`iPad ${classes.product}`}>
            <img src={Ipad} alt="" />
            <Typography>Ipad</Typography>
          </div>
          <div className={classes.product}>
            <img src={TV} alt="" />
            <Typography>TV</Typography>
          </div>
          <div className={classes.product}>
            <img src={Accessory} alt="Apple Accessory" />
            <Typography>Accessory</Typography>
          </div>
          <div className={classes.product}>
            <img src={Accessory} alt="Apple Accessory" />
            <Typography>Accessory</Typography>
          </div>
        </Box>
        <Box className={classes.middle_slider}>
          <img src={middleSlider} alt="" />
        </Box>
        <Box className={classes.newest_product}>
          <Box>
            <Typography variant="h5" textAlign="left">
              Sản phẩm mới nhất. Khám phá ngay!
            </Typography>
          </Box>
          <Box className={classes.product_container}></Box>
        </Box>
        <Box className={classes.locate}>
          <Typography variant="h5" textAlign="left">
            Hãy đến cửa hàng để trải nghiệm tốt hơn
          </Typography>
          <Box className={classes.locate_img}>
            <Box>
              <img src={store1} alt="" />
              <Typography>Địa chỉ: 123, Nguyễn Trãi, Quận Bình Thạnh, TP.HCM </Typography>
            </Box>
            <Box>
              <img src={store2} alt="" />
              <Typography>Địa chỉ: 18A, Nguyễn Huệ, TP.Thủ Đức </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.storeDistinction}>
          <Typography variant="h5" textAlign="left">
            Sự khác biệt của iTech Store
          </Typography>
          <Box className={classes.distinction_col}>
            <Box className={classes.col_item}>
              <img src={FastDeliver} alt="" />
              <Typography>Giao hàng nhanh trong 2h tại thành phố HCM</Typography>
            </Box>
            <Box className={classes.col_item}>
              <img src={Authentic} alt="" />
              <Typography>Cam kết hàng chính hãng 100%</Typography>
            </Box>
            <Box className={classes.col_item}>
              <img src={Sale} alt="" />
              <Typography>Nhiều ưu đãi, nhiều chương trình giảm sốc</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
