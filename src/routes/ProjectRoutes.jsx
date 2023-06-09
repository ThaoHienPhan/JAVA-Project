import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, authRoutes, publicRoutes } from './routes';
import DefaultLayout from 'layout/DefaultLayout';
import NotFound from 'pages/NotFound/NotFound';
import AuthRoute from './AuthRoute';
import AdminLayout from '~/layout/AdminLayout';
import AdminDashboard from '~/pages/AdminDashboard';

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
                  {route.product && route.slider ? (
                    <Page product={route.product} slider={route.slider} />
                  ) : (
                    <Page />
                  )}
                </DefaultLayout>
              }
            />
          );
        })}
        {authRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AuthRoute>
                  <Page />
                </AuthRoute>
              }
            />
          );
        })}
        {adminRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AdminLayout>
                  <Page />
                </AdminLayout>
              }
            />
          );
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
