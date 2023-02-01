// import { useState } from "react"
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ id, nombre, stock, categoria, img, descripcion, precio }) => {
    const navigate = useNavigate();
    //Arreglar esto del carrito
    // const { agregarAlCarrito } = useContext(CarritoContext);

    const handleVolver = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <br />
            <small>Categoría: {categoria}</small>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>

            {stock <= 20 && <h5>Últimas unidades disponibles!</h5>}

            {/* <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button> */}
            <hr />

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail