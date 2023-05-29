import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import DefaultLayout from 'layout/DefaultLayout';
import NotFound from 'pages/NotFound/NotFound';
import HomePage from '~/pages/Home/HomePage';
import { useSelector } from 'react-redux';

const hasToken = () => {
  return localStorage.getItem('accessToken');
};

const ProjectRoute = () => {
  const { loggedIn } = useSelector(state => state.auth);

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
          return (
            <Route
              key={index}
              path={route.path}
              element={
                loggedIn ? (
                  <DefaultLayout>
                    <HomePage />
                  </DefaultLayout>
                ) : (
                  <Page />
                )
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
