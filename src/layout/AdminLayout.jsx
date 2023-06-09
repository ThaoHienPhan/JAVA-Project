import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '~/components/Admin/SideBar';

AdminLayout.propTypes = {};

function AdminLayout(props) {
  const { children } = props;
  return (
    <div className='flex'>
      <SideBar />
      {children}
    </div>
  );
}

export default AdminLayout;
