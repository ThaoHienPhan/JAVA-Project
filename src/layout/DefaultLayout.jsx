import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
