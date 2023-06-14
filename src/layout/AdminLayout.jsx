import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '~/components/Admin/SideBar';
import { useQuery } from '@tanstack/react-query';
import productApi from '~/api/productApi';

AdminLayout.propTypes = {};

function AdminLayout(props) {
  const product = useQuery(['allProducts'], productApi.getAllProducts);

  const { children } = props;
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}

export default AdminLayout;
