import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import topSlider from "../../../utils/Image/Group 44.png";
import store1 from "../../../utils/Image/store1.png";
import store2 from "../../../utils/Image/store2.png";
import Mac from "../../../utils/Image/image 11.png";
import AirPod from "../../../utils/Image/image 10.png";
import AppleWatch from "../../../utils/Image/image 9.png";
import Ipad from "../../../utils/Image/image 7.png";
import Iphone from "../../../utils/Image/iphone.png";
import TV from "../../../utils/Image/image 5.png";
import Accessory from "../../../utils/Image/accessory.png";
import middleSlider from "../../../utils/Image/Slider.png";
import { makeStyles } from "@mui/styles";

HomePage.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {},
  top_slider: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  product_container: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    justifyContent: "space-between",
    "& .iPhone": {
      "& img": {
        width: "43%",
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
    flex: "1 0 16%",
    backgroundColor: "#C4C4C4",
    padding: "10px",
    margin: "20px 25px",
    boxSizing: "border-box",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    "& img": {
      width: "80%",
      height: "auto",
    },
    "& .MuiTypography-root": {
      position: "relative",
      top: "20px",
    },
  },
  
  locate: {
    display: "flex",
    width: "100%",
    "& img": {
      width: "80%",
    },
  },
  middle_slider: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
    marginTop: "20px",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  return (
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
          <Typography variant="h5">
            Sản phẩm mới nhất. Khám phá ngay!
          </Typography>
        </Box>
        <Box>
          <div className={classes.product}>Item 1</div>
          <div className={classes.product}>Item 2</div>
          <div className={classes.product}>Item 3</div>
          <div className={classes.product}>Item 4</div>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="h5">
            Hãy đến cửa hàng để trải nghiệm tốt hơn
          </Typography>
        </Box>
        <Box className={classes.locate}>
          <Box>
            <img src={store1} alt="" />
          </Box>
          <Box>
            <img src={store2} alt="" />
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default HomePage;
