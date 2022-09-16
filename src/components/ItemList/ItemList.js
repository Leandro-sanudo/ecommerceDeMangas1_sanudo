import { Item } from "../Item/Item"

const ItemList = ({ listProducts }) => {
    return(
        <>
            {listProducts.map((prod, i) => <Item key={`${prod.title} - ${i}`} title={prod} />)}
        </>
    )
}

export { ItemList }