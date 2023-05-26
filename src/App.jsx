// import { Route, Routes } from 'react-router-dom';
import 'assets/styles/main.scss';
import './i18n';

import ProjectRoute from 'routes/ProjectRoutes';
import { GlobalStoreContext } from 'context/StoreContext';
import { Provider } from 'react-redux';
import store from 'store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStoreContext>
          <ProjectRoute />
        </GlobalStoreContext>
      </Provider>
    </div>
  );
}

export default App;
