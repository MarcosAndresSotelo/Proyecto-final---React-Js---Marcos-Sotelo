import { useContext } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CarritoContext"

const CarritoDeCompras = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5 text-center">
                <h2>No hay elementos en el carrito</h2>
                <Link to="/livingcomedor" className="btn btn-primary">SEGUIR COMPRANDO</Link>
            </div>
        )
    }

    return (
        <div className="container my-5 text-center">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map(item => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <img src={item.img} alt={item.nombre} style={{ maxWidth: "150px" }} />
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.precio * item.cantidad}</p>
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