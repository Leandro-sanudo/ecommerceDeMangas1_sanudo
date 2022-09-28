import React, { useState, useEffect } from "react";
import { CustomPromise } from "../../Utilities/CustomPromise";
import { products } from "../assets/Productos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    
    let {category} = useParams()

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        CustomPromise(products, category)
            .then(res => setListProducts(res))
    }, [category])
    
    return (
       <> 
        <h1>{greeting}</h1>
        <ItemList listProducts={listProducts} />
       </> 
    )
}

export default ItemListContainer