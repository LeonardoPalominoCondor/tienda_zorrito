export default function ProductCard({ nombre, fotografia, precio_antes, precio_despues, descuento}) {
    return (
      <div className="aspect-w-1 aspect-h-1 bg-white rounded overflow-hidden shadow-lg text-center">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{nombre}</div>
        </div>
        <img className="w-full" src={`/images/${fotografia}`} />
        <div className="px-6 py-4">
          <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800 mr-2">{descuento*100}%</span>
          <div className="text-lg">
            <span className="line-through text-red-600">{precio_antes}</span>
            <span className="text-green-600">{precio_despues}</span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            AGREGAR
          </button>
        </div>
      </div>
    );
  }