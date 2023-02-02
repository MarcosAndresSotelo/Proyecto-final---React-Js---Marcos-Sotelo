import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useLocation, useParams } from "react-router-dom"
import { db } from "../firebase/config"
import ItemList from "../itemList/ItemList"

const pathLivingComedor = 'livingcomedor';
const pathDormitorioBano = 'dormitorioBano';

const ItemListContainer = () => {
    const currentPathObject = useLocation();
    const { categoria } = useParams()

    //States
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const currentPath = currentPathObject.pathname.split("/")[1];
        setLoading(true)
        let collectionName = "";
        switch (currentPath) {
            case pathLivingComedor: collectionName = "productos";
                break;
            case pathDormitorioBano: collectionName = "productosDormitorioBano";
                break;
            default: collectionName = "productos";
        }

        const productosRef = collection(db, collectionName)
        getDocs(productosRef)
            .then((resp) => {
                if (categoria) {
                    setProductos(resp.docs.map((doc) => { return { ...doc.data(), id: doc.id } }).filter((producto) => { return producto.categoria === categoria }))
                } else {
                    setProductos(resp.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
                }
                setLoading(false)
            })
    }, [currentPathObject, categoria])

    if (loading) {
        return (
            <div className="text-center container my-5">
                <br/>
                <h2>Nuestros productos</h2>
                <hr/>
                <Spinner />
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    {
                        <ItemList productos={productos} />
                    }
                </div>
            </div>
        )

    }
}

export default ItemListContainer