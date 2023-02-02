import { useNavigate } from "react-router-dom";
import { useContext, useCartContext, useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, stock, categoria, img, descripcion, precio }) => {

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)


    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            stock,
            categoria,
            img,
            descripcion,
            precio,
            cantidad
        }

        agregarAlCarrito(item)
    }


    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <br />
            <small>Categoría: {categoria}</small>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>

            {stock <= 20 && <h5>Últimas unidades disponibles!</h5>}

            {
                !isInCart(id)
                    ? <ItemCount
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        max={stock}
                        onAdd={handleAgregar}
                    />
                    : <Link to="/carrito" className="btn btn-success">Terminar mi compra</Link>
            }

            <hr />

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>

        </div>
    )
}

export default ItemDetail