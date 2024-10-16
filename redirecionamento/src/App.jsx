import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação

  const handleLogin = () => {
    setIsAuthenticated(true); // Define o estado de autenticação como verdadeiro
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Define o estado de autenticação como falso
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div><h1>Home Page</h1><p>Bem-vindo à página inicial!</p></div>} />
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} // Passa a função de login
        />
        <Route
          path="/protected"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div><h1>Protected Content</h1><p>Conteúdo protegido visível apenas para usuários autenticados.</p></div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
