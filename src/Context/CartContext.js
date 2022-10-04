import React, {createContext, useState,} from "react";

export const cartContext = createContext()

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        const existItem = cart.findIndex(itemCart => itemCart.item.id == item.id)
        if(existItem !== -1) {
            const newCart = cart.filter(item => item !== cart[existItem])
            setCart([{
                item: {
                    title: item.title,
                    stock: 5
                }, quantity
            }, ...newCart])
        } else {
            setCart([...cart, {
                item: {
                    title: item.title,
                    stock: 5
                }, quantity
            }])
        }
        
    }

    const removeItem = (item) => {
        const newCart = cart.filter(oldItem => {
             return oldItem.item !== item
            })
        setCart([...newCart])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => cart.some((item) => item.id === id)

    return (
        <cartContext.Provider
            value={( cart, addItem, removeItem, clear, isInCart )}
        >
            {children}
        </cartContext.Provider>
    )    
}

export default CustomProvider