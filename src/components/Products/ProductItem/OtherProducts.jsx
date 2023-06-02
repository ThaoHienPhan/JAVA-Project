import React from 'react';
import ProductWithPrice from './ProductWithPrice';
import { useTranslation } from 'react-i18next';

const OtherProducts = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-8">
      <h2 className="text-4xl mb-4 text-red-600">{t('hot_sales')}</h2>
      <div className="w-full p-5 rounded-xl inline-grid grid-cols-5 gap-8">
        {product.slice(0, 5).map((prod, idx) => (
          <ProductWithPrice key={`${prod}_${idx}`} item={prod} />
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
