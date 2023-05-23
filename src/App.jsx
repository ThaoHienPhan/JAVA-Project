// import { Route, Routes } from 'react-router-dom';
import '~/assets/styles/app.css';
import '~/assets/styles/main.scss';
import './i18n';

import ProjectRoute from './routes/ProjectRoutes';
import { GlobalStoreContext } from '~/context/StoreContext';

function App() {
  return (
    <div className="App">
      <GlobalStoreContext>
        <ProjectRoute />
      </GlobalStoreContext>
    </div>
  );
}

export default App;
