import React from 'react';

import store1 from '~/assets/images/store1.png';
import store2 from '~/assets/images/store2.png';

const Store = () => {
  const stores = [
    {
      address: 'Địa chỉ: 123, Nguyễn Trãi, Quận Bình Thạnh, TP.HCM',
      photo: store1,
    },
    {
      address: 'Địa chỉ: 18A, Nguyễn Huệ, TP.Thủ Đức',
      photo: store2,
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="drop-shadow-lg font-medium text-3xl mb-3">
        Hãy đến cửa hàng để trải nghiệm
      </h2>
      <div className="flex w-full justify-between gap-5">
        {stores.map((store, i) => (
          <div key={i} className="w-1/2 relative">
            <img className="w-full object-contain" src={store.photo} alt="" />
            <p className="absolute bottom-2 left-1/2 bg-white/[0.56] p-2 transform -translate-x-1/2 w-3/4 rounded-lg text-center">
              {store.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
