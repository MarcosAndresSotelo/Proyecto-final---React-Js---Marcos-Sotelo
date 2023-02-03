import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext"
import ItemContador from "../itemContador/ItemContador";


const ItemDetail = ({ id, nombre, stock, categoria, img, descripcion, precio }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    const navigate = useNavigate();

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

            <ItemContador id={id} name={nombre} stock={stock} price={precio} agregarAlCarrito={agregarAlCarrito} />

            <hr />

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>

        </div>
    )
}

export default ItemDetail