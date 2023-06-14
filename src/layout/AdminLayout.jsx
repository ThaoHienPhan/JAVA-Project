import React from 'react';
import SideBar from '~/components/Admin/SideBar';
import { useQuery } from '@tanstack/react-query';
import productApi from '~/api/productApi';

function AdminLayout(props) {
  useQuery(['allProducts'], productApi.getAllProducts);

  const { children } = props;
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}

export default AdminLayout;
