// // src/components/LogoutButton.js
// import React from 'react';
// import { Button } from 'flowbite-react';

// const LogoutButton = () => {
//   const handleLogout = () => {
//     // отправка запроса на сервер для выхода
//     console.log('Logging out...');
//     // перенаправление на WelcomePage
//     window.location.href = '/welcome';
//   };

//   return <Button onClick={handleLogout}>Logout</Button>;
// };

// export default LogoutButton;


// import React from 'react';

// const LogoutButton = () => {
//   const handleLogout = async () => {
//     try {
//       // Отправить запрос на бэкенд для выхода из системы
//       await fetch('https://project-back-codewave1-rqmw.onrender.com/users/logout', {
//         method: 'POST', 
//       });
//       // Перенаправить пользователя на WelcomePage 
//       window.location.href = '/welcome';
//     } catch (error) {
//       console.error('Failed to logout:', error);
//     }
//   };

//   return (
//     <div className="logout-button">
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default LogoutButton;


import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/auth/operations.js'; // Убедитесь, что путь к вашим действиям правильный

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      // Перенаправить пользователя на WelcomePage
      history.push('/welcome');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="logout-button">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
