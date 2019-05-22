import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="jumbotron">
      <p>Войти, чтобы увидеть секретную страницу!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Логин
      </button>
    </div>
  );
};

export default LoginPage;
