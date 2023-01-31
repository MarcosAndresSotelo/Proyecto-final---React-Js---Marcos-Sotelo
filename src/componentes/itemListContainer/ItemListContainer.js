import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {


        const productosRef = collection(db, "productos")
        // ---------------------------------
        getDocs(productosRef)
            .then((resp) => {
                setProductos(resp.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
            })

    }
    )

    return (

        <div>
            {
                <ItemList productos={productos} />
            }
        </div>

    )

}

export default ItemListContainer