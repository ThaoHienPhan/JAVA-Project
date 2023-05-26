import React from 'react';
import { useTranslation } from 'react-i18next';

import store1 from 'assets/images/store1.png';
import store2 from 'assets/images/store2.png';

const Store = () => {
  const { t } = useTranslation();
  const stores = [
    {
      address: t('address_1'),
      photo: store1,
    },
    {
      address: t('address_2'),
      photo: store2,
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="drop-shadow-lg font-medium text-3xl mb-3">
        {t('come_to_store')}
      </h2>
      <div className="flex w-full justify-between gap-5">
        {stores.map((store, i) => (
          <div key={i} className="w-1/2 relative">
            <img className="w-full object-contain" src={store.photo} alt="" />
            <p className="absolute bottom-2 left-1/2 bg-white/[0.56] p-2 transform -translate-x-1/2 w-4/5 rounded-lg text-center">
              {store.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
