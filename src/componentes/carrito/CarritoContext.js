import React, { useState, useContext } from 'react';

export const CarritoContext = React.createContext();

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = item => {
    setCarrito([...carrito, item]);
  };

  const quitarDelCarrito = id => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito
      }}
    >
    </CarritoContext.Provider>
  );
};

export default Carrito;