import React, { useContext } from 'react';
import { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import {cartContext} from '../../Context/CartContext';

export const ItemDetail = ({ title }) => {
    console.log(title)

    const [changeButton, SetChangeButton] = useState(false)
    const { addItem } = useContext(cartContext)
    const onAdd = (counter) => {
        addItem(title, counter)
        SetChangeButton(true)
    }

    return(
        <cartContext>
        <div style={stylez.cards} key={title.title}>
            <h2>{title.title}</h2>
            <img src={title.pictureUrl} alt={title.title}/>
            <h3>${title.price}</h3>
            <p>{title.description}</p>
            {changeButton ? (
                <div>
                    <Link to='/cart'>
                        <button>Ir al carrito</button>
                    </Link>
                </div>
            ) : (
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            )}
        </div>
        </cartContext>
    )
}

const stylez = {
    cards: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10%",
        marginRight: "5%",
        marginLeft: "5%",
        border: "5px solid black",
        paddingRight: "20%",
        paddingLeft: "20%",
    }
}
