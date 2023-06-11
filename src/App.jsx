// import { Route, Routes } from 'react-router-dom';
import 'assets/styles/main.scss';
import './i18n';

import ProjectRoute from 'routes/ProjectRoutes';
import { Provider } from 'react-redux';
import store from 'store/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="App">
      <Provider store={store}>
        <ProjectRoute />
      </Provider>
    </div>
  );
}

export default App;
