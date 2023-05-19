import React from 'react';

const BannerWithBtn = ({ banner }) => {
  return (
    <>
      <img src={banner} alt="" />
      <div className="flex justify-center items-center mt-5">
        <button className="rounded-lg text-[#FBFBFB] bg-[#363636]/[.94] px-3 py-2 text-xl">
          Đăng ký thông tin đặt hàng
        </button>
      </div>
    </>
  );
};

export default BannerWithBtn;
