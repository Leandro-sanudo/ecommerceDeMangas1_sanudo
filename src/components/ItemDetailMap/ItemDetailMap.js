import { ItemDetail } from "../ItemDetail/ItemDetail"

const ItemDetailMap = ({ product }) => {
    return(
        <>
            {product.map((prod, i) => <ItemDetail key={`${prod.title} - ${i}`} title={prod} />
            )}
        </>
    )
}

export { ItemDetailMap }

//{product.map((prod, i) => <ItemDetail key={`${prod.title} - ${i}`} title={prod} />
            //)}