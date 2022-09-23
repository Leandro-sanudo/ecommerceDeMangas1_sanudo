import React from 'react';

export const ItemDetail = ({ title }) => {
    console.log(title)
    return(
        <div style={stylez.cards}>
            <h2>{title.title}</h2>
            <img src={title.pictureUrl} alt={title.title}/>
            <h3>${title.price}</h3>
            <p>{title.description}</p>
        </div>
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
