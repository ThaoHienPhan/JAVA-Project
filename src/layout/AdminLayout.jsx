import React from 'react';
import SideBar from '~/components/Admin/SideBar';
import { useQuery } from '@tanstack/react-query';
import productApi from '~/api/productApi';
import userApi from '~/api/userApi';
import { Navigate } from 'react-router-dom';
import LoadingComponent from '~/components/Loading';

function AdminLayout(props) {
  useQuery(['allProducts'], productApi.getAllProducts);
  const userProfile = useQuery(['myProfile'], userApi.getUserProfile);

  if (userProfile.isLoading) {
    return <LoadingComponent />;
  }

  if (!userProfile.data?.admin) {
    return <Navigate to="/" replace />;
  }

  const { children } = props;
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}

export default AdminLayout;
