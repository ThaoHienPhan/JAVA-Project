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
];

const authRoutes = [
  { path: 'login', component: Auth },
  { path: '/register', component: Auth },
];

export { publicRoutes, authRoutes };
