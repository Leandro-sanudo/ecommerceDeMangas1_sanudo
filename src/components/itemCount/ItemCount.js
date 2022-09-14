import React, {useState, useEffect} from "react";

const ItemCount = () => {

    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    
    useEffect(() =>{
        setNumber(number + 1);

        const interval = setInterval(() => {
            console.log("ping");
        },1000)

        return(() =>{
            clearInterval(interval);
        })
    },[counter]);

    const add = () => {
        setCounter(counter + 1);
    }

    const substract = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <div>Contador</div>
            <h1>{counter}</h1>
            <button onClick={add}>Sumar</button>
            <button onClick={substract}>Restar</button>
            <button onClick={reset}>Agregar al carrito</button>
        </>
    )
}




export default ItemCount