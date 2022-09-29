import React, {useState, useEffect} from "react";

const ItemCount = ({ initial, stock, onAdd}) => {

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
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const substract = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    //const reset = () => {
        //setCounter(0);
    //}

    return (
        <>
            <div>Contador</div>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </>
    )
}




export default ItemCount