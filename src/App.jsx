// import { Route, Routes } from 'react-router-dom';
import 'assets/styles/main.scss';

import ProjectRoute from 'routes/ProjectRoutes';
import { Provider } from 'react-redux';
import store from 'store/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import 'sweetalert2/src/sweetalert2.scss';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="App">
      <Provider store={store}>
        <ProjectRoute />
        <ToastContainer
          limit={2}
          position="top-center"
          autoClose={500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </div>
  );
}

export default App;
