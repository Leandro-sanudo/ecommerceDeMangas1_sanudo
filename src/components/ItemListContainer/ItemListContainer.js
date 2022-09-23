import React, { useState, useEffect } from "react";
import { CustomPromise } from "../../Utilities/CustomPromise";
import { products } from "../assets/Productos";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        CustomPromise(products)
            .then(res => setListProducts(res))
    }, [])
    
    return (
       <> 
        <h1>{greeting}</h1>
        <ItemList listProducts={listProducts} />
       </> 
    )
}

export default ItemListContainer