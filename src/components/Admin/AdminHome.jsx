import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { getAllOrder } from '~/api/orderApi';

AdminHome.propTypes = {};

function AdminHome(props) {
  const allOrders = useQuery(['allOrders'], getAllOrder);

  return <div>Welcome to Admin Page</div>;
}

export default AdminHome;
