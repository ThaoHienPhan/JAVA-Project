import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../assets/images/Mac slider.png";
import { makeStyles } from "@mui/styles";

Mac.propTypes = {};
const useStyles = makeStyles(() => ({
  slider: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  btnContainer:{
    width: "100%",
    position: "relative",
  },
  btn: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid  rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(0, 0, 0, 0.76)",
    color: "#FFFFFF",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
function Mac(props) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.slider}>
        <img src={Slider} alt="" />
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.btn}>Đăng ký thông tin đặt hàng</button>
      </div>
      <div className="category">
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hotSale">
        <p>Khuyến mãi hot </p>
        <div className="saleItems">api</div>
      </div>
      <div className="otherItems">
        <p>Các sản phẩm khác. <span>Tìm hiểu ngay</span></p>
        <div className="others">api</div>
      </div>
      <Footer />
    </div>
  );
}

export default Mac;
