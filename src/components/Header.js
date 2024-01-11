import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faSearch, faStar, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    
    const handleLoginClick = () => {
      router.push('/login');
    };

    return (
        <header className="bg-gray-200 p-4 flex flex-col md:flex-row justify-between items-center">
            {/* Logo y Nombre de la Empresa */}
            <div className="flex items-center mb-4 md:mb-0">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/017/068/895/small/fox-mascot-esport-logo-design-template-vector.jpg" alt="Logo Zorrito" className="h-8 mr-3" />
                <h1 className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                    Tienda Zorrito
                </h1>
            </div>

            {/* Navegación */}
            <nav className="mb-4 md:mb-0 md:flex items-center">
                <a href="#" className="text-orange-500 mr-4 flex items-center font-semibold hover:text-orange-600 transition-colors">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                    Popular
                </a>
                <a href="#" className="text-orange-500 flex items-center font-semibold hover:text-orange-600 transition-colors">
                    <FontAwesomeIcon icon={faBookOpen} className="text-green-400 mr-1" />
                    Catálogo
                </a>
            </nav>

            {/* Campo de Búsqueda */}
            <div className="flex items-center mb-4 md:mb-0">
                <input
                    type="text"
                    placeholder="¿Qué quieres encontrar?"
                    className="rounded-full py-2 px-4 w-64 border-none shadow"
                />
                <button type="submit" className="ml-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            {/* Iconos de Notificaciones, Carrito e Inicio de Sesión */}
            <div className="flex items-center">
                <button className="text-gray-700 mx-2">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="text-gray-700 mx-2">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div>
                  {auth.isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                      <span className="text-sm md:text-base text-gray-800 font-semibold">
                        Bienvenido, {auth.user.nombre}
                      </span>
                      <button
                        onClick={() => setAuth({ user: null, isAuthenticated: false })}
                        className="bg-red-500 text-white text-xs md:text-sm px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => router.push('/login')}
                      className="bg-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Inicio de Sesión
                    </button>
                  )}
                </div>
            </div>
            
        </header>
    );
}