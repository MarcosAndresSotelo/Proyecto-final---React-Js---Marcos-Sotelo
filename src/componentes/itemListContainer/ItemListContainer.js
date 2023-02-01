import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase/config"
import ItemList from "../itemList/ItemList"
import Spinner from "../spinner/Spinner";

const pathLivingComedor = '/livingcomedor';
const pathDormitorioBano = '/dormitorioBano';

const ItemListContainer = () => {
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let collectionName = "";
        const currentPath = window.location.pathname.split("/")[1];
        switch (currentPath) {
            case pathLivingComedor: collectionName = "productos";
                break;
            case pathDormitorioBano: collectionName = "productosDormitorioBano";
                break;
            default: collectionName = "productos";
        }
        setLoading(true)
        const productosRef = collection(db, collectionName)
        getDocs(productosRef)
            .then((resp) => {
                setProductos(resp.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Spinner />
        )
    }

    if (categoria) {
        return (
            <div>
                {
                    <ItemList productos={productos.filter((producto) => { return producto.categoria === categoria })} />
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    <ItemList productos={productos} />
                }
            </div>
        )
    }

}

export default ItemListContainer