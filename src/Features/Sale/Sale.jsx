import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopSlider from "../../utils/Image/Slider.png";
import SecondSlider from "../../utils/Image/secondSlider.png";
import LastSlider from "../../utils/Image/LastSlider.png";

Sale.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {},
  Slider: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
    marginTop: "20px",
  },
  saleProduct: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-between",
  },
  saleItem: {
    backgroundColor: "#ccc",
    width: "45%",
    height: "45%",
    marginBottom: " 2%",
  },
}));
function Sale(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">
        Tưng bừng khai trương. Giảm giá cực sốc!
      </Typography>
      <Box className={classes.Slider}>
        <img src={TopSlider} alt="" />
      </Box>
      <Box className={classes.Slider}>
        <img src={SecondSlider} alt="" />
      </Box>
      <Box className={classes.Slider}>
        <img src={LastSlider} alt="" />
      </Box>
      <Box className={classes.saleProduct}>
        <Box className={classes.saleItem}><img src="" alt="" /></Box>
        <Box className={classes.saleItem}>Item2</Box>
        <Box className={classes.saleItem}>Item3</Box>
        <Box className={classes.saleItem}>Item4</Box>
      </Box>
    </Box>
  );
}

export default Sale;
