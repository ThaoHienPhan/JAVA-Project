import {
  OrderedListOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { useTranslation } from 'react-i18next';
import { Language } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '~/store/slices/languageSlice';
import logo from 'assets/images/logo.png';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SideBar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState([pathname]);
  const { language } = useSelector(state => state.language);

  console.log(language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    setActiveKey(pathname);
  }, []);

  useEffect(() => {
    setActiveKey([pathname]);
  }, [pathname]);

  const dispatch = useDispatch();

  const onClick = ({ key }) => {
    setActiveKey([key]);
    if (key === 'vietnamese') {
      dispatch(changeLanguage('VI'));
    } else if (key === 'english') {
      dispatch(changeLanguage('EN'));
    } else {
      navigate(key);
    }
  };

  const items = [
    getItem(t('products'), 'product', <ShopOutlined />, [
      getItem(
        t('products_list'),
        'list_products',
        null,
        [getItem(t('products'), '/admin/products')],
        'group'
      ),
      getItem(
        t('actions'),
        'action_product',
        null,
        [getItem(t('add_products'), '/admin/products/add')],
        'group'
      ),
    ]),
    getItem(t('users'), '/admin/users', <UserOutlined />),
    getItem(t('orders'), '/admin/orders', <OrderedListOutlined />),
    getItem(t('language'), '', <Language />, [
      getItem(
        'Language',
        '.',
        null,
        [
          getItem(t('vietnamese'), 'vietnamese', null),
          getItem(t('english'), 'english', null),
        ],
        'group'
      ),
    ]),
  ];

  return (
    <div className="min-h-screen bg-slate-100 min-w-[256px]">
      <div className="flex justify-center items-center text-xl font-semibold my-8">
        <div className="flex items-center">
          <img src={logo} alt="" width={50} />
          <div className="text-base">
            <p>{t('branch_name')}</p>
          </div>
        </div>
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
