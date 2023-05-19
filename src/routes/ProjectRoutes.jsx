import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import DefaultLayout from 'layout/DefaultLayout';
import Login from 'pages/Auth/components/Login';
import Register from 'pages/Auth/components/Register';
// import HomePage from 'src/pages/Home/HomePage';
import HomePage from 'pages/Home/HomePage';
import NotFound from 'pages/NotFound/NotFound';

const getAccessToken = () => {
  return sessionStorage.getItem('token');
};

const getRegister = () => {
  return sessionStorage.getItem('isRegister');
};
const ProjectRoute = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              }
            />
          );
        })}
        {authRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
        <Route
          path="/*"
          element={
            <DefaultLayout>
              <NotFound />
            </DefaultLayout>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default ProjectRoute;
