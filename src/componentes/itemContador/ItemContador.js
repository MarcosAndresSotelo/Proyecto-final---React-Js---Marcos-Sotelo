import React, { useState } from "react";

const ItemContador = ({ id, nombre, stock, precio, agregarAlCarrito }) => {
    const [count, setCount] = useState(1);

    const handleContador = (value) => {
        if (count + value >= 1 && count + value <= stock) {
            setCount(count + value);
        }
    };

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <p>Cantidad disponible: {stock}</p>
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={() => handleContador(-1)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleContador(1)}>+</button>
            </div>
            <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito(id, nombre, precio, count)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemContador;