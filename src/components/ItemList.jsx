import Item from "./Item"
import "./ListContainer.css"

function ItemList({ ItemList = [] }) {
    return (
        < section className="cardContainer">
            {ItemList.map((product) => {
                return (
                    <Item
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                )
            })}
        </section >
    )
}

export default ItemList
