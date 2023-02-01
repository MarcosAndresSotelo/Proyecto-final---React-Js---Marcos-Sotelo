import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase/config"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()


    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then(doc => {
                console.log(doc);
                setItem({ ...doc.data(), id: doc.id })
            })

    }, [id])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer