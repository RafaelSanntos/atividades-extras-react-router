import React from 'react';

function Profile() {
  // Simulação de dados do perfil do usuário
  const userProfile = {
    username: 'john_doe',
    email: 'john@example.com',
    age: 30,
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {userProfile.username}</p>
      <p>Email: {userProfile.email}</p>
      <p>Age: {userProfile.age}</p>
    </div>
  );
}

export default Profile;
