import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 20;

  useEffect(() => {
    const testApiConnection = async () => {
      try {
        const response = await fetch('/api/productos');
        const data = await response.json();
        console.log('Datos de la API:', data); // Agrega esta línea para imprimir los datos en la consola
      } catch (error) {
        console.error('Error al hacer la solicitud a la API:', error);
      }
    };

    testApiConnection(); // Llama a la función de prueba al cargar la página

    // Lógica para obtener y mapear los productos
    fetch('/api/productos')
      .then(response => response.json())
      .then(data => {
        const mappedProducts = data.map(product => ({
          id: product.id,
          nombre: product.nombre,
          fotografia: product.fotografia,
          precio_antes: product.precio_antes,
          precio_despues: product.precio_despues,
          descuento: product.descuento,
        }));

        console.log('Mapped Products:', mappedProducts);
        setProducts(mappedProducts);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Función para simular la carga de más productos (ajusta según tu paginación real)
  const loadMoreProducts = () => {
    // Aquí deberías agregar la lógica para cargar más productos si tu API soporta paginación
  };

  return (
    <div className="container mx-auto mt-10">
      <ProductList products={products.slice(0, currentPage * PRODUCTS_PER_PAGE)} />
      <Footer loadMoreItems={loadMoreProducts} />
    </div>
  );
}