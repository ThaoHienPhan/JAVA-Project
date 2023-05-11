import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth/Auth';
import HomePage from './pages/Home/HomePage';
import Sale from './pages/Sale/Sale';
import Mac from './pages/MAC/Mac';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
