import React from 'react';
import { Link } from "react-router-dom";


export const Item = ({ nombre, img, descripcion, precio, categoria, id, agregarAlCarrito }) => {
    return (
        <div className="col-3 m-3 text-center">
            <img src={img} alt={nombre} className="w-50" />
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            <p>
                <small className='w-100'>Categoría: {categoria}</small>
            </p>
            <p className='text-center'>
                <button onClick={() => agregarAlCarrito({ nombre, img, descripcion, precio, categoria, id })} className="btn btn-primary">
                    Agregar al carrito
                </button>
            </p>
            <p className='text-center'>
                <Link to={`/detail/item/${id}`} className="btn btn-outline-primary">
                    Ver más
                </Link>
            </p>
        </div>
    );
};

export default Item;

