import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import productApi from '~/api/productApi';

const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getProducts();
    dispatch(productApi.getAll());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
