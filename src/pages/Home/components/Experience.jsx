import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = ({ image, message }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <img alt="" src={image} />
      <span className="text-2xl mx-5 mt-1 text-left">{message}</span>
    </div>
  );
};

export default Experience;
