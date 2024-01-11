import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product) => (      
      
          <ProductCard
            key={product.id}
            nombre={product.nombre}
            fotografia={product.fotografia}
            precio_antes={product.precio_antes}
            precio_despues={product.precio_despues}
            descuento={product.descuento}
          />
       
      ))}
    </div>
  );
}