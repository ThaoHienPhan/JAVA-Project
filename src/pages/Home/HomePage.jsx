import React from 'react';

import { Card, CardContent } from '@mui/material';

import topSlider from 'assets/images/Group 44.png';
import Sale from 'assets/images/sale.png';
import Authentic from 'assets/images/auth.png';
import FastDeliver from 'assets/images/fastDeli.png';
import middleSlider from 'assets/images/Slider.png';
import Store from './components/Store';
import Experience from './components/Experience';
import { useTranslation } from 'react-i18next';
import Category from '~/components/Products/ProductItem/Category';

function HomePage() {
  const { t } = useTranslation();

  const IPad = 'http://localhost:8080/files/ipad_10_2_2021.webp';
  const IPhone = 'http://localhost:8080/files/iPhone_11_64.webp';
  const Macbook = 'http://localhost:8080/files/mac_air_m1_256_2020.webp';
  const Accessories = 'http://localhost:8080/files/pencil_2_MU8F2.webp';
  const Watch = 'http://localhost:8080/files/watch_se_2022_40mm.webp';
  const Airpods = 'http://localhost:8080/files/pencil_2_MU8F2.webp';

  const categories = [
    {
      name: 'IPAD',
      url: IPad,
    },
    {
      name: 'IPhone',
      url: IPhone,
    },
    {
      name: 'Mac',
      url: Macbook,
    },
    {
      name: 'Accessories',
      url: Accessories,
    },
    {
      name: 'Watch',
      url: Watch,
    },
    {
      name: 'Airpods',
      url: Airpods,
    },
  ];
  return (
    <>
      <div className="flex justify-end my-8">
        <img src={topSlider} alt="" />{' '}
      </div>
      <div className="container-wrapper my-8">
        <div className="inline-grid grid-cols-6 gap-10">
          {categories.map((cat, i) => (
            <Category key={i} categories={cat} />
          ))}
        </div>
        <div className="mt-8">
          <img src={middleSlider} alt="" />
        </div>
        <Store />
        <div className="mt-8">
          <h2 className="drop-shadow-lg font-medium text-3xl mb-3">
            {t('come_to_store')}
          </h2>
          <div className="flex justify-between gap-14 px-8 py-4 drop-shadow-lg">
            <Card className="w-1/3">
              <CardContent>
                <Experience image={FastDeliver} message={t('fast_deli')} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardContent>
                <Experience image={Authentic} message={t('auth_commit')} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardContent>
                <Experience image={Sale} message={t('sale_programs')} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
