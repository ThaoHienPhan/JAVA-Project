import React from 'react';
import ProductWithPrice from './ProductWithPrice';
import { useTranslation } from 'react-i18next';

const OtherProducts = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-8">
      <h2 className="text-4xl mb-4 text-red-600">{t('hot_sales')}</h2>
      <div className="w-full p-5 rounded-xl inline-grid grid-cols-3 gap-8">
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
      </div>
    </div>
  );
};

export default OtherProducts;
