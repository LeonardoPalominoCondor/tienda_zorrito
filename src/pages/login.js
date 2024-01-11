import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return <LoginForm />;
};
// Esto obtendrá el contexto específico de la página y podrá ser usado para pasar props a la página
Login.getInitialProps = async (ctx) => {
    // Devuelve la propiedad 'hideHeader' como true para esta página
    return { hideHeader: true };
  };

export default Login;