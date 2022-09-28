import React, { useEffect, useState } from "react";
//import { ItemDetail } from "../ItemDetail/ItemDetail";
//import { products } from "../assets/Productos";
import { CustomDetail } from "../../Utilities/CustomDetail";
//import { ItemDetailMap } from "../ItemDetailMap/ItemDetailMap";
import {useParams} from "react-router-dom"
import { products } from "../assets/Productos";
import { ItemDetailMap } from "../ItemDetailMap/ItemDetailMap";

const ItemDetailContainer = () => {

    const { id } = useParams()

    console.log(id)

    const [product, setProduct] = useState([])
    //const [error, setError] = useState(false)

    useEffect(() => {
        CustomDetail(products, parseInt(id))
            .then(res => setProduct(res))
    }, [id]) 
            
    return (
        <>
            <ItemDetailMap product={product} />
        </>
    )
}

export default ItemDetailContainer

//const getItem = new Promise ((resolve, reject) => {
    //setTimeout(() => {
        //resolve(products)
    //}, 2000)
//})
//getItem(products, parseInt(id)).then(result => setProduct(result))
//}, [id]);