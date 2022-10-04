import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

export const Cart = () => {
    const {cart} = useContext(cartContext)
    console.log(cart);
    return (
        <>
        <div>Cart</div>
        {cart ? cart.map(({item}) => <h1 key={item.id}>{item.title}</h1>) : "vacío"}
        </>
    )
}