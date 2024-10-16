import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserDetail from './components/UserDetails';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/user/1">Usuário 1</Link></li>
          <li><Link to="/user/2">Usuário 2</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/" element={<h2>Bem-vindo! Selecione um usuário acima.</h2>} />
      </Routes>
    </div>
  );
}

export default App;
