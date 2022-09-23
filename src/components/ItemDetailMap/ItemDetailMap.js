import { ItemDetail } from "../ItemDetail/ItemDetail"

const ItemDetailMap = ({ product }) => {
    return(
        <>
            {product.slice(-1).map((prod, i) => <ItemDetail key={`${prod.title} - ${i}`} title={prod} />
            )}
        </>
    )
}

export { ItemDetailMap }