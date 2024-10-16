import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();

  // Simulação de dados do usuário
  const userData = {
    1: { name: 'John Doe', age: 30, email: 'john@example.com' },
    2: { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  };

  const user = userData[userId];

  return (
    <div>
      {user ? (
        <div>
          <h2>Detalhes do Usuário</h2>
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </div>
  );
}

export default UserDetail;
