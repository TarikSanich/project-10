// src/components/LogoutButton.js
import React from 'react';
import { Button } from 'flowbite-react';

const LogoutButton = () => {
  const handleLogout = () => {
    // отправка запроса на сервер для выхода
    console.log('Logging out...');
    // перенаправление на WelcomePage
    window.location.href = '/welcome';
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
