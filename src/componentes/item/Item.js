import React from 'react';
import { Link } from "react-router-dom";

export const Item = ({ nombre, img, descripcion, precio, categoria, id, agregarAlCarrito }) => {
    return (
        <div className="col-3 m-3">
            <img src={img} alt={nombre} />
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            <small>Categoría: {categoria}</small>
            <Link to={`/detail/item/${id}`} className="btn btn-outline-primary">
                Ver más
            </Link>
            <button onClick={() => agregarAlCarrito({ nombre, img, descripcion, precio, categoria, id })} className="btn btn-primary">
                Agregar al carrito
            </button>
        </div>
    );
};

export default Item;

