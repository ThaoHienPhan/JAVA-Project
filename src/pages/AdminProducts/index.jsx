import { useQuery } from '@tanstack/react-query';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import productApi from '~/api/productApi';
import ProductCard from './ProductCard';

const AdminProducts = () => {
  const { t } = useTranslation();
  const products = useQuery(['allProducts'], productApi.getAllProducts);

  const [activeKey, setActiveKey] = useState('accessories');
  const [productType, setProductType] = useState();

  useEffect(() => {
    if (products.data) {
      filterData(activeKey);
    }
  }, [products.data]);

  const items = [
    {
      key: 'accessories',
      label: t('accessories'),
      children: <ProductCard product={productType} />,
    },
    {
      key: 'airpods',
      label: t('airpods'),
      children: <ProductCard product={productType} />,
    },
    {
      key: 'iphone',
      label: t('iphone'),
      children: <ProductCard product={productType} />,
    },
    {
      key: 'ipad',
      label: t('ipad'),
      children: <ProductCard product={productType} />,
    },
    {
      key: 'macbook',
      label: t('mac'),
      children: <ProductCard product={productType} />,
    },
    {
      key: 'watch',
      label: t('watch'),
      children: <ProductCard product={productType} />,
    },
  ];

  const filterData = key => {
    const newData = [...products.data];
    let productTypes = [];
    switch (key) {
      case 'accessories':
        productTypes = newData?.filter(data => data?.type === 'ACCESSORIES');
        break;
      case 'airpods':
        productTypes = newData?.filter(data => data?.type === 'AIRPODS');
        break;
      case 'iphone':
        productTypes = newData?.filter(data => data?.type === 'IPHONE');
        break;
      case 'ipad':
        productTypes = newData?.filter(data => data?.type === 'IPAD');
        break;
      case 'macbook':
        productTypes = newData?.filter(data => data?.type === 'MACBOOK');
        break;
      case 'watch':
        productTypes = newData?.filter(data => data?.type === 'WATCH');
        break;
      default:
        productTypes = newData?.filter(data => data?.type === key);
        break;
    }
    setProductType(productTypes);
  };

  const onChange = key => {
    setActiveKey(key);
    filterData(key);
  };

  return (
    <div className="container-wrapper w-3/4 px-8 mt-3 mb-8">
      <div>
        <Tabs
          activeKey={activeKey}
          items={items}
          onChange={onChange}
          className=""
          tabBarGutter={75}
        />
      </div>
    </div>
  );
};

export default AdminProducts;
