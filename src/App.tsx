import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Kukusan from './pages/Kukusan';
import Profile from './pages/Profile';
import Guide from './pages/Guide';
import Notifications from './pages/Notifications';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/home" 
          element={
            isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/kukusan" 
          element={
            isAuthenticated ? <Kukusan /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/profile" 
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/guide" 
          element={
            isAuthenticated ? <Guide /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/notifications" 
          element={
            isAuthenticated ? <Notifications /> : <Navigate to="/login" />
          } 
        />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
