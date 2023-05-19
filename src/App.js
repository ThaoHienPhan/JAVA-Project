// import { Route, Routes } from 'react-router-dom';
import { GlobalStoreContext } from 'assets/context/StoreContext';
import './App.css';
import 'assets/styles/main.scss';
import './i18n';

import ProjectRoute from './routes/ProjectRoutes';

function App() {
  return (
    <div className="App">
      <GlobalStoreContext>
        <ProjectRoute />
      </GlobalStoreContext>
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="sale" element={<Sale />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
