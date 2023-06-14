import {
  OrderedListOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Products', 'product', <ShopOutlined />, [
    getItem(
      'List Products',
      'list_products',
      null,
      [getItem('Products', '/admin/products')],
      'group'
    ),
    getItem(
      'Actions',
      'action_product',
      null,
      [getItem('Add Product', '/admin/products/add')],
      'group'
    ),
  ]),
  getItem('Users', '/admin/users', <UserOutlined />),
  getItem('Orders', '/admin/orders', <OrderedListOutlined />),
];

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState([pathname]);

  useEffect(() => {
    setActiveKey(pathname);
  }, []);

  useEffect(() => {
    setActiveKey([pathname]);
  }, [pathname]);

  const onClick = ({ key }) => {
    setActiveKey([key]);
    navigate(key);
  };

  return (
    <div className="min-h-screen bg-slate-100 min-w-[256px]">
      <div className="flex justify-center items-center text-xl font-semibold my-8">
        <Logo />
      </div>
      <Menu
        onClick={onClick}
        className="bg-slate-100 w-full"
        defaultSelectedKeys={activeKey}
        defaultOpenKeys={activeKey}
        selectedKeys={activeKey}
        mode="inline"
        items={items}
        disabledOverflow={true}
      />
    </div>
  );
};

export default SideBar;
