import Item from "../item/Item";


const ItemList = ({ productos, collectionName }) => {
    return (
        <div className="text-center container my-5">
            <h2>Nuestros productos</h2>
            <hr />

            <section className="row my-4">
                {productos.map((prod) => <Item key={prod.id} {...prod} collectionName={collectionName} />)}
            </section>
        </div>
    )
}

export default ItemList
