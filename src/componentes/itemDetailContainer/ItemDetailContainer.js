import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pathDormitorioBano, pathLivingComedor } from "../../App"
import { db } from "../firebase/config"
import ItemDetail from "../itemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { category, id } = useParams()

    useEffect(() => {
        let collectionName = "";
        switch (category) {
            case pathLivingComedor: collectionName = "productos";
                break;
            case pathDormitorioBano: collectionName = "productosDormitorioBano";
                break;
            default: collectionName = "productos";
        }
        const docRef = doc(db, collectionName, id);
        getDoc(docRef)
            .then(doc => {
                setItem({ ...doc.data(), id: doc.id })
            })

    }, [id, category])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer