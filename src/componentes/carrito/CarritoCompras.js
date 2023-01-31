import React, { useContext } from 'react';
import { CarritoContext } from './CarritoContext';

const CarritoCompras = () => {
  const { carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>
                <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total: ${carrito.reduce((total, item) => total + item.precio, 0)}
      </p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};

export default CarritoCompras;