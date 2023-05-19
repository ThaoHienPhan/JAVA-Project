import HomePage from 'pages/Home/HomePage';
import Mac from 'pages/MAC/Mac';
import Sale from 'pages/Sale/Sale';
import Auth from 'pages/Auth/Auth';
import AirPods from 'pages/AirPods/AirPods';
import Iphone from 'pages/Iphone/Iphone';
import Ipad from 'pages/Ipad/Ipad';
import Watch from 'pages/Watch/Watch';
import Accessories from 'pages/Accessories/Accessories';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/sale', component: Sale },
  { path: '/mac', component: Mac },
  { path: '/ipad', component: Ipad },
  { path: '/iphone', component: Iphone },
  { path: '/watch', component: Watch },
  { path: '/airpods', component: AirPods },
  { path: '/accessories', component: Accessories },
];

const authRoutes = [
  { path: 'login', component: Auth },
  { path: '/register', component: Auth },
];

export { publicRoutes, authRoutes };
