import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/Login/LoginPage';
import RegisterPage from './containers/Register/RegisterPage';

import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
