import { Link } from "react-router-dom";
import "./item.scss"

const Item = ({ nombre, img, precio, categoria, id, collectionName }) => {
    return (
        <div className="col-3 m-3 text-center">
            <img src={img} alt={nombre} className="w-50" />
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <small className='w-100'>Categoría: {categoria}</small>
            <p className='text-center'>
                <Link to={`/detail/${collectionName}/item/${id}`} className="btn btn-light my-1">
                    Ver más
                </Link>
            </p>
        </div>
    )
}

export default Item

