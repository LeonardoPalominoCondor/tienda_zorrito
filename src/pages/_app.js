import '../styles/globals.css';
import Header from '../components/Header'; 
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
    // Determina si el header debe ser mostrado basado en la propiedad hideHeader.
    const showHeader = !(pageProps.hideHeader);

    return (
      <AuthProvider>
        {showHeader && <Header />}
        <Component {...pageProps} />
      </AuthProvider>
    );
}

export default MyApp;