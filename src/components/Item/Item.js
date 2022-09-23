import React from "react"

const Item = ({ title }) => {
    return(
        <div style={stylez}>
            <h2>{title.title}</h2>
            <img src={title.pictureUrl} alt={title.title}/>
            <h3>${title.price}</h3>
        </div>
        
    )
}

const stylez = {
    cards: {
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "1fr",
    }
}

export { Item }