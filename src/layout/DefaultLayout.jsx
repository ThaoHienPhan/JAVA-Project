import { useQuery } from '@tanstack/react-query';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '~/api/productApi';
import userApi from '~/api/userApi';

const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getProducts();
    dispatch(productApi.getAll());
  }, [dispatch]);

  useQuery(['allProducts'], productApi.getAllProducts);

  return (
    <React.Fragment>
      <div className="flex flex-col h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
