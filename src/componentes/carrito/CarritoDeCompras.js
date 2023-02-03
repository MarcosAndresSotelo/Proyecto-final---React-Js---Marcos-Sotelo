import { useContext } from "react"
import { CartContext } from "../../context/CarritoContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const CarritoDeCompras = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2> Carrito vacío</h2>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                        <hr />
                    </div>
                ))
            }

            <h4>Total: ${totalCart()}</h4>

            <button className="btn btn-danger" onClick={emptycart}>Vaciar carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default CarritoDeCompras