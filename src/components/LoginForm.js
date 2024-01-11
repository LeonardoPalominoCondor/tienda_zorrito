import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si todos los campos están llenos
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingresa todos los campos requeridos.',
      });
      return;
    }

    try {
      // Aquí haces la petición a tu API
      const response = await fetch('/api/usuarios');
      const users = await response.json();

      // Busca si el usuario con ese correo y contraseña existe
      const user = users.find((user) => user.correoElectronico === email && user.contraseña === password);

      if (user) {
        // Usuario correcto, mostrar alerta de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Inicio de sesión exitoso.',
        }).then(() => {
        // Configura el estado de autenticación y redirige a la página principal
        setAuth({ user, isAuthenticated: true });
        router.push('/'); // Redirige al usuario a la página principal
        });;
        // Aquí manejarías el inicio de sesión, como guardar el estado de autenticación o redireccionar
      } else {
        // Usuario o contraseña incorrectos, mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Correo electrónico o contraseña incorrectos.',
        });
      }
    } catch (error) {
      // Error al realizar la petición, mostrar alerta
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo conectar con el servicio de autenticación.',
      });
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex items-center mb-8">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/017/068/895/small/fox-mascot-esport-logo-design-template-vector.jpg"
          alt="Logo Zorrito"
          className="h-16 mr-3" // Ajusta el tamaño del logo si es necesario
        />
        <h1 className="text-4xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          Tienda Zorrito
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div 
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-5 w-5 text-gray-700"/>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;