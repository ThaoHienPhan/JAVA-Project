import HomePage from 'pages/Home/HomePage';
import Sale from 'pages/Sale/Sale';
import Auth from 'pages/Auth/Auth';
import Product from '~/pages/Product/Product';
import IphoneSlider from 'assets/images/iphone_banner.jpg';
import WatchSlider from 'assets/images/watch_banner.jpg';
import MacSlider from 'assets/images/Mac slider.png';
import IpadSlider from 'assets/images/banner-ipad.webp';
import AirpodsSlider from 'assets/images/AP_Banner.png';
import AccessSlider from 'assets/images/Accessories_Banner.jpg';
import ProductDetail from '~/pages/ProductDetail';
import ProductType from '~/pages/ProductType';

import UserCart from '~/pages/UserCart';
import CheckOut from '~/pages/Checkout';

import AdminHome from '~/components/Admin/AdminHome';
import AdminUser from '~/components/Admin/AdminUser';
import UserOrder from '~/pages/UserOrder';
import AdminProducts from '~/pages/AdminProducts';
import EditProduct from '~/components/Admin/AdminProduct/EditProduct';
import AdminOrders from '~/pages/AdminOrders';
import QAPage from '~/pages/QA';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/sale', component: Sale },
  { path: '/mac', component: Product, product: 'MACBOOK', slider: MacSlider },
  { path: '/ipad', component: Product, product: 'IPAD', slider: IpadSlider },
  {
    path: '/iphone',
    component: Product,
    product: 'IPHONE',
    slider: IphoneSlider,
  },
  { path: '/watch', component: Product, product: 'WATCH', slider: WatchSlider },
  {
    path: '/airpods',
    component: Product,
    product: 'AIRPODS',
    slider: AirpodsSlider,
  },
  {
    path: '/accessories',
    component: Product,
    product: 'ACCESSORIES',
    slider: AccessSlider,
  },
  { path: '/product/detail/:id', component: ProductDetail },
  { path: '/product/type/:type', component: ProductType },
  { path: '/cart', component: UserCart },
  { path: '/checkout', component: CheckOut },
  { path: '/order/my', component: UserOrder },
  { path: '/qa', component: QAPage },
];

const authRoutes = [
  { path: 'login', component: Auth },
  { path: '/register', component: Auth },
];

const adminRoutes = [
  { path: '/admin', component: AdminProducts },
  { path: '/admin/products', component: AdminProducts },
  { path: '/admin/products/add', component: EditProduct },
  { path: '/admin/products/update/:id', component: EditProduct },
  { path: '/admin/dashboard', component: AdminUser },
  { path: '/admin/users', component: AdminUser },
  { path: '/admin/orders', component: AdminOrders },
];

export { publicRoutes, authRoutes, adminRoutes };
