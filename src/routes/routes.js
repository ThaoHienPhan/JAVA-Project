import HomePage from 'pages/Home/HomePage';
import Mac from 'pages/MAC/Mac';
import Sale from 'pages/Sale/Sale';
import Auth from 'pages/Auth/Auth';
import AirPods from 'pages/AirPods/AirPods';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/mac', component: Mac },
  { path: '/sale', component: Sale },
  { path: '/airpods', component: AirPods },
];

const authRoutes = [
  { path: 'login', component: Auth },
  { path: '/register', component: Auth },
];

export { publicRoutes, authRoutes };
