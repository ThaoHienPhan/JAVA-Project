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

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-end my-8">
        <img src={topSlider} alt="" />{' '}
      </div>
      <div className="container-wrapper my-8">
        <div className="inline-grid grid-cols-4 gap-10">
          {/* {!!products && <ProductItem item={products[0]} />} */}
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
