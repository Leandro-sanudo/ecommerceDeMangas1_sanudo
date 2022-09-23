import React, { useEffect, useState } from "react";
//import { ItemDetail } from "../ItemDetail/ItemDetail";
//import { products } from "../assets/Productos";
//import { CustomPromise } from "../../Utilities/CustomPromise";
//import { ItemDetailMap } from "../ItemDetailMap/ItemDetailMap";
//import {useParams} from "react-router-dom"
import { products } from "../assets/Productos";
import { ItemDetailMap } from "../ItemDetailMap/ItemDetailMap";

const ItemDetailContainer = () => {

    //const { id } = useParams()
    const [product, setProduct] = useState([])
    //const [error, setError] = useState(false)

    //useEffect(() => {
        //CustomPromise(products)
            //.then(res => setProduct(res))
    //}, [])
    
    useEffect(() => {
            const getItem = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000)
            })
        getItem.then(result => setProduct(result))
    }, []);

    return (
        <>
            <ItemDetailMap product={product} />
        </>
    )
}

export default ItemDetailContainer