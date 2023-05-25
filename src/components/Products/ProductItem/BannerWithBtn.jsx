import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerWithBtn = ({ banner }) => {
  const { t } = useTranslation();
  return (
    <>
      <img src={banner} alt="" />
      <div className="flex justify-center items-center mt-5">
        <button className="rounded-lg text-[#FBFBFB] bg-[#363636]/[.94] px-3 py-2 text-xl">
          {t('register_order')}
        </button>
      </div>
    </>
  );
};

export default BannerWithBtn;
